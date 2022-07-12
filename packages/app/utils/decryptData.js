import * as CryptoJS from "crypto-js";

export const decryptData = (data, id) => {
  try {
    let key = CryptoJS.SHA256('i_am_a_truefan' + id).toString()
    let bytes = CryptoJS.AES.decrypt(data, key)
    let string = bytes.toString(CryptoJS.enc.Utf8)
    return !!string
      ? string.substring(1, string.length - 1).replace(/\\/g, '')
      : ''
  } catch (e) {
    console.error(e)
  }
}
