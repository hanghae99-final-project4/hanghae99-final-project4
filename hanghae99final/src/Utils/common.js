export const snsPayloadParser = {
  NAVER: (payload) => ({
    id: payload.id,
    name: payload.name,
    gender: payload.gender,
    email: payload.email,
    platform: "naver",
  }),
  KAKAO: (payload) => ({
    id: payload.profile.id,
    name: payload.profile.properties.nickname,
    gender: false,
    email: false,
    platform: "kakao",
  }),
};
