import mongoose, { mongo } from "mongoose";

const shortLinkSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    url: { type: String, default: "" }, // 원본 주소
    shortUrl: { type: String, default: "" }, // 짧아진 주
  },
  {
    timestamps: true, // 모델 생성 시 timestamp 찍기 설정
  }
);

const ShortLink =
  mongoose.models["ShortLink"] || mongoose.model("ShortLink", shortLinkSchema); // 동일한 모델을 여러번 만들지 않기 위한 조건문

export default ShortLink;
