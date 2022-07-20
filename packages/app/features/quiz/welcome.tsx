import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Svg, Path } from "react-native-svg";

export function Welcome (){

	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._OnBoarding}>
			<View style = {stylesheet._Mask_Group}>
				<View style = {stylesheet._Rectangle_590}>
				</View>
				<Image style = {stylesheet._young_indian_woman_against_grunge_wall_screaming_happy_surprised_by_offer_promo_1187_10541_1} source = {{uri: imageUrl_young_indian_woman_against_grunge_wall_screaming_happy_surprised_by_offer_promo_1187_10541_1}}>
				</Image>
			</View>
			<View style = {stylesheet._Group_1942}>
				<View style = {stylesheet._Mask_Group_2}>
					<View style = {stylesheet._Rectangle_590_2}>
					</View>
					<Image style = {stylesheet._young_indian_woman_against_grunge_wall_screaming_happy_surprised_by_offer_promo_1187_10541_1_2} source = {{uri: imageUrl_young_indian_woman_against_grunge_wall_screaming_happy_surprised_by_offer_promo_1187_10541_1_2}}>
					</Image>
				</View>
				<View style = {stylesheet._Mask_Group_3}>
					<View style = {stylesheet._Rectangle_590_3}>
					</View>
					<Image style = {stylesheet._happy_young_man_having_video_chat_call_smiling_latin_guy_talking_online_computer_screen_point_view_happy_young_man_having_video_102478058_1} source = {{uri: imageUrl_happy_young_man_having_video_chat_call_smiling_latin_guy_talking_online_computer_screen_point_view_happy_young_man_having_video_102478058_1}}>
					</Image>
				</View>
			</View>
			<View style = {stylesheet._Group_1941}>
				<View style = {stylesheet._Mask}>
				</View>
				<View style = {[stylesheet._View_Referral_Leader, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._View_Referral_Leader, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Welcome to TrueFan!
				</Text>
				</View>
				<View style = {[stylesheet._View_Referral_Leader_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._View_Referral_Leader_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Win Video Message From Your Favourite Celebrity
				</Text>
				</View>
				<View style = {[stylesheet._Proceed_to_buy, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Proceed_to_buy, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Existing user?  Click here
				</Text>
				</View>
				<View style = {stylesheet._Group_2136}>
					<View style = {stylesheet._Group_1062}>
						<View style = {stylesheet._Rectangle}>
						</View>
						<View style = {[stylesheet._View_Referral_Leader_3, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
						<Text style = {[stylesheet._View_Referral_Leader_3, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
							I am a New user
						</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({
	_OnBoarding: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 812,
		borderRadius: 24,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(247, 247, 247, 1)",
		left: 0,
		top: 0,
	},
	_Mask_Group: {
		position: "absolute",
		width: 375,
		height: 660,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_590: {
	},
	_young_indian_woman_against_grunge_wall_screaming_happy_surprised_by_offer_promo_1187_10541_1: {
		position: "absolute",
		width: 1212,
		height: 660,
		borderRadius: 0,
		opacity: 1,
		left: -392,
		right: "auto",
		top: 1,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Group_1942: {
		position: "absolute",
		width: 375,
		height: 660,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Mask_Group_2: {
		position: "absolute",
		width: 375,
		height: 660,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_590_2: {
	},
	_young_indian_woman_against_grunge_wall_screaming_happy_surprised_by_offer_promo_1187_10541_1_2: {
		position: "absolute",
		width: 1212,
		height: 660,
		borderRadius: 0,
		opacity: 1,
		left: -392,
		right: "auto",
		top: 1,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Mask_Group_3: {
		position: "absolute",
		width: 96,
		height: 160,
		transform: [
			{translateX: 255},
			{translateY: 376},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_590_3: {
	},
	_happy_young_man_having_video_chat_call_smiling_latin_guy_talking_online_computer_screen_point_view_happy_young_man_having_video_102478058_1: {
		position: "absolute",
		width: 406.3999938964844,
		height: 164,
		borderRadius: 0,
		opacity: 1,
		left: -128.7998046875,
		right: "auto",
		top: -4,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Group_1941: {
		position: "absolute",
		width: 374,
		height: 268,
		transform: [
			{translateX: 0},
			{translateY: 544},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Mask: {
		position: "absolute",
		width: 374,
		height: "auto",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
		opacity: 1,
		borderWidth: 1,
		borderColor: "rgba(255, 255, 255, 0.30000001192092896)",
		left: 0,
		right: "auto",
		top: 0,
		bottom: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(17, 18, 21, 1)",
	},
	_View_Referral_Leader: {
		position: "absolute",
		width: "100%",
		height: "auto",
		left: 35,
		right: "auto",
		top: 28,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		
		textDecorationLine: "none",
		lineHeight: 16,
		fontSize: 28,
		color: "rgb(1,1,1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_View_Referral_Leader_2: {
		position: "absolute",
		width: 326,
		height: "auto",
		left: 25,
		right: "auto",
		top: 58,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		textDecorationLine: "none",
		fontSize: 14,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0,
	},
	_Proceed_to_buy: {
		position: "absolute",
		width: "100%",
		height: "auto",
		left: "50%",
		top: "auto",
		bottom: 48,
		transform: [
			{translateX: -98},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0,
	},
	_Group_2136: {
		position: "absolute",
		width: 335,
		height: 48,
		transform: [
			{translateX: 20},
			{translateY: 124},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Group_1062: {
		position: "absolute",
		width: 335,
		height: 48,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle: {
		position: "absolute",
		width: 335,
		height: 48,
		borderRadius: 500,
		opacity: 1,
		left: 0,
		right: "auto",
		top: "auto",
		bottom: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(255, 50, 127)",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.5,
		shadowRadius: 5,
		backgroundColor: "rgba(255, 50, 127, 1)",
	},
	_View_Referral_Leader_3: {
		position: "absolute",
		width: 327,
		height: "auto",
		left: 4,
		right: "auto",
		top: "auto",
		bottom: 12,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0,
	},
});

const imageUrl_happy_young_man_having_video_chat_call_smiling_latin_guy_talking_online_computer_screen_point_view_happy_young_man_having_video_102478058_1 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/dbddba034598af4c80036fe48809cc66"
const imageUrl_young_indian_woman_against_grunge_wall_screaming_happy_surprised_by_offer_promo_1187_10541_1_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/f6db640d509668790181af8b898e7b23"
const imageUrl_young_indian_woman_against_grunge_wall_screaming_happy_surprised_by_offer_promo_1187_10541_1 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/69ee61794ea32c2cb2cfcc26a7e90e34"