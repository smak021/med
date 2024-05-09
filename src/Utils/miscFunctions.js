const generateResponseArray = (type) => {
  switch (type) {
    case "WEIGHT_LOSS":
      return [
        {
          type: "subhead",
          content: "For weight loss, you can try the following diet plan:",
        },
        {
          type: "point",
          content: "Eat plenty of fruits and vegetables",
        },
        {
          type: "point",
          content: "Choose whole grains over refined grains",
        },
        {
          type: "point",
          content: "Limit your intake of added sugars and processed foods",
        },
        {
          type: "point",
          content: "Drink plenty of water",
        },
        {
          type: "conclusion",
          content:
            "Thank you, for choosing me as your medical assist to find solutions of your queries",
        },
        {
          type: "conclusion",
          content:
            "I hope i was able to assist you with your queries and give some solution",
        },
      ];
    case "MUSCLE_GAIN":
      return [
        {
          type: "subhead",
          content: "For muscle gain, you can try the following diet plan:",
        },
        {
          type: "point",
          content:
            "Increase your protein intake with sources like chicken, fish, eggs, and legumes",
        },
        {
          type: "point",
          content:
            "Consume complex carbohydrates such as brown rice, quinoa, and oats",
        },
        {
          type: "point",
          content:
            "Incorporate healthy fats from sources like nuts, seeds, and avocados",
        },
        {
          type: "conclusion",
          content:
            "Thank you, for choosing me as your medical assist to find solutions of your queries",
        },
        {
          type: "conclusion",
          content:
            "I hope i was able to assist you with your queries and give some solution",
        },
      ];
    case "SORE_TROAT":
      return [
        {
          type: "subhead",
          content: "For sore throat you can try the following suggestions:",
        },
        {
          type: "point",
          content: "Gargle with warm salt water",
        },
        {
          type: "point",
          content: "Stay hydrated",
        },
        {
          type: "point",
          content: "Inhale steam",
        },
        {
          type: "point",
          content:
            "For more queries or suggestions, here is a doctor, at your location, Name: DR. X",
        },
        {
          type: "subhead",
          content: "Here is the detail about Dr.X: Paediatric,ABC Hospital",
        },
        {
          type: "conclusion",
          content:
            "Thank you, for choosing me as your medical assist to find solutions of your queries",
        },
        {
          type: "conclusion",
          content:
            "I hope i was able to assist you with your queries and give some solution",
        },
        {
          type: "conclusion",
          content: "Get well soon",
        },
      ];
    case "FEVER":
      return [
        {
          type: "subhead",
          content: "For fever you can try the following suggestions:",
        },
        {
          type: "point",
          content: "Drink plenty of water",
        },
        {
          type: "point",
          content: "Keep a wet towel at your forehead",
        },
        {
          type: "point",
          content: "Wear clothes that keep you warm",
        },
        {
          type: "point",
          content: "Check you temperature with thermometer",
        },
        {
          type: "point",
          content:
            "Avoid eating food that are cold, like ice-cream or any other outside food",
        },
        {
          type: "point",
          content: "Wear a mask whenever you meet someone",
        },
        {
          type: "point",
          content:
            "For more queries or suggestions, here is a doctor, at your location, Name: DR. A",
        },
        {
          type: "subhead",
          content: "Here is the detail about Dr.A: Paediatric,DEF Hospital",
        },
        {
          type: "conclusion",
          content:
            "Thank you, for choosing me as your medical assist to find solutions of your queries",
        },
        {
          type: "conclusion",
          content:
            "I hope i was able to assist you with your queries and give some solution",
        },
        {
          type: "conclusion",
          content: "Get well soon",
        },
      ];
    case "ANKLE_SPRAIN":
      return [
        {
          type: "subhead",
          content: "For ankle sprain you can try the following suggestions:",
        },
        {
          type: "point",
          content: "R.I.C.E.method: Rest,Ice,Compression,Elevation",
        },
        {
          type: "point",
          content:
            "Gentle range of motion exercises can help after the pain subsides",
        },
        {
          type: "point",
          content:
            "An ankle brace can provide extra stability and protection as the ankle heals",
        },
        {
          type: "point",
          content: "Avoid putting pressure or too much weight on the ankle",
        },
        {
          type: "point",
          content:
            "For more queries or suggestions, here is a doctor, at your location, Name: DR. Y",
        },
        {
          type: "subhead",
          content: "Here is the detail about Dr.Y: Neurologist,GHI Hospital",
        },
        {
          type: "conclusion",
          content:
            "Thank you, for choosing me as your medical assist to find solutions of your queries",
        },
        {
          type: "conclusion",
          content:
            "I hope i was able to assist you with your queries and give some solution",
        },
        {
          type: "conclusion",
          content: "Get well soon",
        },
      ];
    case "FEELING_STRESSED":
      return [
        {
          type: "subhead",
          content:
            "For controlling stress levels you can try the following suggestions:",
        },
        {
          type: "point",
          content: "Practice deep breathing",
        },
        {
          type: "point",
          content: "Exercise regularly",
        },
        {
          type: "point",
          content: "Get adequate sleep",
        },
        {
          type: "point",
          content: "Maintain a proper diet",
        },
        {
          type: "point",
          content: "Take breaks",
        },
        {
          type: "point",
          content: "Seek professional help",
        },
        {
          type: "point",
          content:
            "For more queries or suggestions, here is a doctor, near your location, Name: DR. Z",
        },
        {
          type: "conclusion",
          content: "Here is the detail about Dr.X: Pychiatrist,JKL Hospital",
        },
        {
          type: "conclusion",
          content:
            "Thank you, for choosing me as your medical assist to find solutions of your queries",
        },
        {
          type: "conclusion",
          content:
            "I hope I was able to assist you with your queries and give some solution",
        },
        {
          type: "conclusion",
          content: "Get well soon",
        },
      ];
    default:
      return [
        {
          type: "subhead",
          content: "I'm sorry, I couldn't understand your request.",
        },
      ];
  }
};

export const getResponse = (input) => {
  if (typeof input !== "string") {
    return "Enter a valid input";
  }

  let key = "OTHER";

  if (
    input.toLowerCase().includes("weight loss") ||
    input.toLowerCase().includes("loss weight")
  ) {
    key = "WEIGHT_LOSS";
  } else if (
    input.toLowerCase().includes("muscle gain") ||
    input.toLowerCase().includes("gain muscle")
  ) {
    key = "MUSCLE_GAIN";
  } else if (input.toLowerCase().includes("sore throat")) {
    key = "SORE_TROAT";
  } else if (input.toLowerCase().includes("ankle sprain")) {
    key = "ANKLE_SPRAIN";
  } else if (input.toLowerCase().includes("i am feeling stressed lately")) {
    key = "FEELING_STRESSED";
  } else if (input.toLowerCase().includes("fever")) {
    key = "FEVER";
  }

  return generateResponseArray(key);
};
