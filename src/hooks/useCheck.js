/* 정규식 */
export const regEmail =
  /^[0-9a-zA-Z]([-_/.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_/.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
export const regPwd = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*+=-_])(?=.*[0-9]).{8,15}$/;
export const regPhone = /^(\d{2,3})(\d{3,4})(\d{4})$/;

/** 유효성 검사 - (검사할 텍스트, 정규식) */
export const checkReg = (text, reg) => reg.test(text);

/** 빈 값인지 검사 - (검사할 텍스트들이 담긴 배열) */
export const checkNull = (textSet) => {
  for (const text of textSet) {
    if (text.trim() === "") return true;
  }
  return false;
};
