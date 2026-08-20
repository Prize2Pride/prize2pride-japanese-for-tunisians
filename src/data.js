export const levels = [
  { id: "A0", label: "A0", title: "First contact", arabic: "أول خطوة" },
  { id: "A1", label: "A1", title: "Everyday exchange", arabic: "حياة يومية" },
  { id: "A2", label: "A2", title: "Study & movement", arabic: "قراية وتنقّل" },
  { id: "B1", label: "B1", title: "Projects & ideas", arabic: "مشاريع وأفكار" },
  { id: "B2", label: "B2", title: "Academic presence", arabic: "حضور أكاديمي" },
];

export const lessons = [
  { id: "a0-hello", level: "A0", context: "Greeting · التحية", title: "はじめまして", arabic: "أول تعارف بسيط", turns: [["A", "はじめまして。わたしはサミです。", "Nice to meet you. I’m Sami."], ["B", "はじめまして。チュニジアから来ました。", "Nice to meet you. I came from Tunisia."], ["A", "よろしくお願いします。", "I look forward to knowing you."]] },
  { id: "a0-name", level: "A0", context: "Name · الاسم", title: "お名前は？", arabic: "سؤال محترم على الاسم", turns: [["A", "お名前は？", "What is your name?"], ["B", "ラウエドです。", "I’m Raoued."], ["A", "ラウエドさん、よろしく。", "Nice to meet you, Raoued."]] },
  { id: "a1-cafe", level: "A1", context: "Café · قهوة", title: "コーヒーをお願いします", arabic: "طلب بسيط في قهوة", turns: [["A", "コーヒーをお願いします。", "Coffee, please."], ["B", "ホットですか、アイスですか？", "Hot or iced?"], ["A", "アイスでお願いします。", "Iced, please."]] },
  { id: "a1-route", level: "A1", context: "Direction · طريق", title: "駅はどこですか", arabic: "كيفاش تسأل على المحطّة", turns: [["A", "すみません、駅はどこですか？", "Excuse me, where is the station?"], ["B", "あそこを右です。", "It is to the right over there."], ["A", "ありがとうございます。", "Thank you."]] },
  { id: "a2-class", level: "A2", context: "Study · قراية", title: "授業のあとで", arabic: "تنظيم وقت بعد الدرس", turns: [["A", "授業のあとで、図書館へ行きませんか？", "Would you like to go to the library after class?"], ["B", "いいですね。三時はどうですか？", "Sounds good. How about three?"], ["A", "三時に会いましょう。", "Let’s meet at three."]] },
  { id: "a2-travel", level: "A2", context: "Travel · سفر", title: "予約を確認します", arabic: "تأكيد حجز بطريقة واضحة", turns: [["A", "予約を確認したいです。", "I’d like to confirm my reservation."], ["B", "お名前をお願いします。", "May I have your name?"], ["A", "ラウエド・ファデルです。", "It is Raoued Fadhel."]] },
  { id: "b1-project", level: "B1", context: "Project · مشروع", title: "提案を共有します", arabic: "مشاركة اقتراح في مشروع", turns: [["A", "提案の目的を共有します。", "I will share the purpose of the proposal."], ["B", "利用者の意見も入れましょう。", "Let’s include users’ views too."], ["A", "はい、次の版に反映します。", "Yes, I will reflect that in the next version."]] },
  { id: "b1-meeting", level: "B1", context: "Meeting · اجتماع", title: "確認したい点があります", arabic: "طلب توضيح في اجتماع", turns: [["A", "確認したい点があります。", "There is a point I would like to confirm."], ["B", "どうぞ。", "Please go ahead."], ["A", "期限を一週間延ばせますか？", "Could we extend the deadline by one week?"]] },
  { id: "b2-seminar", level: "B2", context: "Seminar · ندوة", title: "根拠を説明します", arabic: "شرح الحجج في ندوة", turns: [["A", "この結論の根拠を説明します。", "I will explain the basis for this conclusion."], ["B", "別の視点はありますか？", "Is there another perspective?"], ["A", "地域の経験からも検討できます。", "We can consider it from regional experience as well."]] },
  { id: "b2-network", level: "B2", context: "Network · علاقات", title: "今後も連絡を取りましょう", arabic: "بناء علاقة مهنية محترمة", turns: [["A", "お話しできてよかったです。", "I am glad we could talk."], ["B", "こちらこそ、ありがとうございました。", "Likewise, thank you."], ["A", "今後も連絡を取りましょう。", "Let’s stay in touch."]] },
];

export const clues = ["Purpose words such as 目的", "A time or place signal", "A phrase that shows a respectful request"];
export const phrases = [
  { id: "a0-greeting", level: "A0", japanese: "はじめまして", tunisian: "تشرفنا", cue: "A respectful first encounter" },
  { id: "a0-thanks", level: "A0", japanese: "ありがとうございます", tunisian: "يعطيك الصحة", cue: "A clear thank-you" },
  { id: "a1-request", level: "A1", japanese: "お願いします", tunisian: "من فضلك", cue: "A concise request" },
  { id: "a1-question", level: "A1", japanese: "どこですか？", tunisian: "وين موجود؟", cue: "A location question" },
  { id: "a2-invitation", level: "A2", japanese: "行きませんか？", tunisian: "ما نمشيوش؟", cue: "An invitation to join" },
  { id: "a2-time", level: "A2", japanese: "会いましょう", tunisian: "نتقابلوا", cue: "A shared plan" },
  { id: "b1-clarify", level: "B1", japanese: "確認したい点があります", tunisian: "عندي نقطة نحب نوضّحها", cue: "A respectful clarification" },
  { id: "b1-purpose", level: "B1", japanese: "目的を共有します", tunisian: "باش نشارك الهدف", cue: "A project opening" },
  { id: "b2-evidence", level: "B2", japanese: "根拠を説明します", tunisian: "باش نفسّر الحجج", cue: "An academic justification" },
  { id: "b2-network", level: "B2", japanese: "連絡を取りましょう", tunisian: "نخليو الاتصال بيناتنا", cue: "A professional continuation" },
];
