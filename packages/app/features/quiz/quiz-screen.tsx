import PrimaryButton from 'app/components/PrimaryButton'
import { useSx, View, Text } from 'dripsy'
import { Audio } from 'expo-av'
import { useEffect, useState } from 'react'
import { useQuery, useMutation } from 'react-query'
import {
  getRandomQuesByQuizId,
  addQuizParticipant,
  addQuizParticipantQues,
} from 'app/api/quizService'
import { decryptData } from 'app/utils/decryptData'
import Loader from 'app/components/Loader/Loader'
import { Image } from 'react-native';

export function QuizScreen() {
  const [totalPoints, setTotalPoints] = useState(0)
  const [selectedAns, setSelectedAns] = useState('')
  const [quesIndex, setQuesIndex] = useState(0)
  const [sound, setSound] = useState()
  const sx = useSx()
  const { data: quizData, isLoading: quizLoading } = useQuery(
    ['getRandomQuesByQuizId'],
    () => getRandomQuesByQuizId('36761')
  )
  const { data: participantData, isLoading: participantLoading } = useQuery(
    ['addQuizParticipant'],
    () => addQuizParticipant({ quizId: '36761', userId: '1772248' })
  )
  const { mutate: addQuizParticipantQuesMutate } = useMutation(
    addQuizParticipantQues
  )
  const { quizParticipantId } = participantData ?? {}

  const { quizQuestionDetailsList, celebUserId } = quizData ?? {}
  const { questionDesc, options } = quizQuestionDetailsList?.[quesIndex] ?? {}
  async function playCorrectSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/audio/correct.mp3')
    )
    setSound(sound)
    await sound.setStatusAsync({ shouldPlay: true })
  }

  async function playIncorrectSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/audio/wrong.mp3')
    )
    setSound(sound)
    await sound.setStatusAsync({ shouldPlay: true })
  }

  const handleSubmitQuestions = (ans) => {
    let data = {
      timeTaken: 500,
      quizParticipantId: quizParticipantId,
      quesId: quizQuestionDetailsList[quesIndex].quesId,
      selectedOption: ans,
      isLastQuestion: !quizQuestionDetailsList[quesIndex + 1],
    }
    addQuizParticipantQuesMutate(data)
  }

  const getCorrectAnswer = () =>
    decryptData(quizQuestionDetailsList[quesIndex].correctOption, celebUserId)

  const handleClickAnswer = (ans) => {
    let correctAns = getCorrectAnswer()
    if (ans === correctAns) {
      playCorrectSound();
      setTotalPoints(totalPoints + 1)
    } else {
      playIncorrectSound();
    }
    handleSubmitQuestions(ans)
    setSelectedAns(ans)
    if (!!quizQuestionDetailsList[quesIndex + 1]) {
      setTimeout(() => {
        setQuesIndex(quesIndex + 1)
        setSelectedAns('')
      }, 300)
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  if (quizLoading || participantLoading)
    return (
      <View
        sx={{
          flex: 1,
          backgroundColor: ['$background'],
        }}
      >
        <Loader />
      </View>
    )

  return (
    <View
      sx={{
        flex: 1,
        backgroundColor: ['$background'],
        alignItems: 'center',
      }}
    >
      {quizQuestionDetailsList?.length > 0 && (
        <View
          sx={{
            flex: 1,
            p: 16,
            width: ['100%', , '100%', '50%'],
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text
              sx={{
                fontSize: [18],
                color: ['$text'],
                opacity: 0.5,
                mt: 40,
                mb: 10,
              }}
            >
              Total Points: {totalPoints}
            </Text>
            <Text
              sx={{
                fontSize: [22],
                color: ['$text'],
                mb: 10,
              }}
            >
              Question {quesIndex + 1}/{quizQuestionDetailsList?.length}
            </Text>
            <Text
              sx={{
                fontSize: [20],
                color: ['$text'],
              }}
            >
              {decryptData(questionDesc, celebUserId)}
            </Text>
          </View>
          <View
            sx={{
              mb: 20,
            }}
          >
            <PrimaryButton
              buttonStyle={{ mb: 10 }}
              onPress={() => {
                handleClickAnswer(options[0].optionKey)
              }}
              gradientColor1={
                selectedAns === options?.[0].optionKey
                  ? options[0].optionKey === getCorrectAnswer()
                    ? 'green'
                    : 'red'
                  : '#BA58E8'
              }
              gradientColor2={
                selectedAns === options?.[0].optionKey
                  ? options[0].optionKey === getCorrectAnswer()
                    ? 'green'
                    : 'red'
                  : '#6258E8'
              }
            >
              {decryptData(options?.[0].optionValue, celebUserId)}
            </PrimaryButton>
            <PrimaryButton
              gradientColor1={
                selectedAns === options?.[1].optionKey
                  ? options[1].optionKey === getCorrectAnswer()
                    ? 'green'
                    : 'red'
                  : '#BA58E8'
              }
              gradientColor2={
                selectedAns === options?.[1].optionKey
                  ? options[1].optionKey === getCorrectAnswer()
                    ? 'green'
                    : 'red'
                  : '#6258E8'
              }
              onPress={() => {
                handleClickAnswer(options[1].optionKey)
              }}
            >
              {decryptData(options?.[1].optionValue, celebUserId)}
            </PrimaryButton>
          </View>

          {/* <Button title="Play Sound" onPress={playSound} /> */}

          {/* <H1 sx={{ fontWeight: '800' }}>Welcome to Solito.</H1>
      <View sx={{ maxWidth: 600 }}>
        <P sx={{ textAlign: 'center' }}>
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </P>
        <P sx={{ textAlign: 'center' }}>
          Solito is made by{' '}
          <A
            href="https://twitter.com/fernandotherojo"
            // @ts-expect-error react-native-web only types
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
            sx={{ color: 'blue' }}
          >
            Fernando Rojo
          </A>
          .
        </P>
      </View>
      <View sx={{ height: 32 }} />
      <Row>
        <TextLink
          href="/user/fernando"
          textProps={{
            style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
          }}
        >
          Regular Link
        </TextLink>
        <View sx={{ width: 32 }} />
        <MotiLink
          href="/user/fernando"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text
            selectable={false}
            sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
          >
            Moti Link
          </Text>
        </MotiLink>
      </Row> */}
        </View>
      )}
    </View>
  )
}
