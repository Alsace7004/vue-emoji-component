

const emojis = [
    /**Smiley Face Emojis**/
    {
        "emoji":"🙂",
        "meaning":"Slightly smiling face",
        "unicode":"U+1F642"
    },
    {
        "emoji":"😀",
        "meaning":"Smiling face",
        "unicode":"U+1F600"
    },
    {
        "emoji":"😄",
        "meaning":"Smiling face",
        "unicode":"U+1F600"
    },
    {
        "emoji":"😁",
        "meaning":"Smiling face",
        "unicode":"U+1F600"
    },
    {
        "emoji":"😅",
        "meaning":"Smiling face",
        "unicode":"U+1F600"
    },
    {
        "emoji":"😆",
        "meaning":"Smiling face",
        "unicode":"U+1F600"
    },
    {
        "emoji":"🤣",
        "meaning":"Smiling face",
        "unicode":"U+1F600"
    },
    {
        "emoji":"😂",
        "meaning":"Smiling face",
        "unicode":"U+1F600"
    },
    {
        "emoji":"🙃",
        "meaning":"Smiling face",
        "unicode":"U+1F600"
    },
    {
        "emoji":"😉",
        "meaning":"Smiling face",
        "unicode":"U+1F600"
    },
    {
        "emoji":"😊",
        "meaning":"Smiling face",
        "unicode":"U+1F600"
    },
    {
        "emoji":"😇",
        "meaning":"Smiling face",
        "unicode":"U+1F600"
    },
    {
        "emoji":"😎",
        "meaning":"Smiling face",
        "unicode":"U+1F600"
    },
    {
        "emoji":"🤓",
        "meaning":"Smiling face",
        "unicode":"U+1F600"
    },
    {
        "emoji":"🧐",
        "meaning":"Smiling face",
        "unicode":"U+1F600"
    },
    {
        "emoji":"🥳",
        "meaning":"Smiling face",
        "unicode":"U+1F600"
    },
    /**Emotional Faces Emojis**/
    {
        "emoji":"🥰",
        "meaning":"Smiling face with hearts",
        "unicode":"U+1F970"
    },
    {
        "emoji":"😍",
        "meaning":"Smiling face with heart eyes",
        "unicode":"U+1F60D"
    },
    {
        "emoji":"🤩",
        "meaning":"Star-struck",
        "unicode":"U+1F60D"
    },
    {
        "emoji":"😘",
        "meaning":"Face blowing kiss",
        "unicode":"U+1F618"
    },
    {
        "emoji":"😗",
        "meaning":"Kissing face",
        "unicode":"U+1F617"
    },
    {
        "emoji":"☺",
        "meaning":"Smiling face",
        "unicode":"U+263A"
    },
    {
        "emoji":"😚",
        "meaning":"Kissing face with closed eyes",
        "unicode":"U+1F61A"
    },
    {
        "emoji":"😙",
        "meaning":"Kissng face with smiling eyes",
        "unicode":"U+1F619"
    },
    /**Faces with Tongue Emojis**/
    {
        "emoji":"😋",
        "meaning":"Yummy face",
        "unicode":"U+1F60B"
    },
    {
        "emoji":"😛",
        "meaning":"Face with tongue",
        "unicode":"U+1F61B"
    },
    {
        "emoji":"😜",
        "meaning":"WInking face with tongue",
        "unicode":"U+1F61C"
    },
    {
        "emoji":"🤪",
        "meaning":"Zany face",
        "unicode":"U+1F92A"
    },
    {
        "emoji":"😝",
        "meaning":"Squinting face with tongue",
        "unicode":"U+1F61D"
    },
    {
        "emoji":"🤑",
        "meaning":"Money face with money tongue",
        "unicode":"U+1F911"
    },
    /**Faces with Hands Emojis**/
    {
        "emoji":"🤗",
        "meaning":"Hugs",
        "unicode":"U+1F917"
    },
    {
        "emoji":"🤭",
        "meaning":"Face with hand in mouth",
        "unicode":"U+1F92D"
    },
    {
        "emoji":"🤫",
        "meaning":"Shushing face",
        "unicode":"U+1F92B"
    },
    {
        "emoji":"🤔",
        "meaning":"Thinking face",
        "unicode":"U+1F914"
    },
    /**Neutral Faces Emojis**/
    {
        "emoji":"😐",
        "meaning":"Neutral face",
        "unicode":"U+1F610"
    },
    {
        "emoji":"🤐",
        "meaning":"Zipped mouth",
        "unicode":"U+1F910"
    },
    {
        "emoji":"🤨",
        "meaning":"Face with raised eyebrow",
        "unicode":"U+1F928"
    },
    {
        "emoji":"😑",
        "meaning":"Expressionless face",
        "unicode":"U+1F611"
    },
    {
        "emoji":"😶",
        "meaning":"Face with no mouth",
        "unicode":"U+1F636"
    },
    {
        "emoji":"😏",
        "meaning":"Smirking face",
        "unicode":"U+1F60F"
    },
    {
        "emoji":"😒",
        "meaning":"Unamused face",
        "unicode":"U+1F612"
    },
    {
        "emoji":"🙄",
        "meaning":"Face with rolling eyes",
        "unicode":"U+1F644"
    },
    {
        "emoji":"😬",
        "meaning":"Grimacing face",
        "unicode":"U+1F62C"
    },
    {
        "emoji":"🤥",
        "meaning":"Lying face",
        "unicode":"U+1F925"
    },
     /**Sleepy Faces Emojis**/
    {
        "emoji":"😪",
        "meaning":"Sleepy face",
        "unicode":"U+1F62A"
    },
    {
        "emoji":"😴",
        "meaning":"Sleeping face",
        "unicode":"U+1F634"
    },
    {
        "emoji":"😌",
        "meaning":"Relieved face",
        "unicode":"U+1F60C"
    },
    {
        "emoji":"😔",
        "meaning":"Pensive face",
        "unicode":"U+1F614"
    },
    {
        "emoji":"🤤",
        "meaning":"Drooling face",
        "unicode":"U+1F924"
    },
    /**Sick Faces Emojis**/
    {
        "emoji":"😷",
        "meaning":"Face with mask",
        "unicode":"U+1F637"
    },
    {
        "emoji":"🤒",
        "meaning":"Face with thermometer",
        "unicode":"U+1F912"
    },
    {
        "emoji":"🤕",
        "meaning":"Face with bandage",
        "unicode":"U+1F915"
    },
    {
        "emoji":"🤢",
        "meaning":"Nauseous face",
        "unicode":"U+1F922"
    },
    {
        "emoji":"🤮",
        "meaning":"Vomiting face",
        "unicode":"U+1F92E"
    },
    {
        "emoji":"🤧",
        "meaning":"Sneezing face",
        "unicode":"U+1F927"
    },
    {
        "emoji":"🥵",
        "meaning":"Hot face",
        "unicode":"U+1F975"
    },
    {
        "emoji":"🥶",
        "meaning":"Cold face",
        "unicode":"U+1F976"
    },
    {
        "emoji":"🥴",
        "meaning":"Woozy face",
        "unicode":"U+1F974"
    },
    {
        "emoji":"🤤",
        "meaning":"Face with crossed-out eyes",
        "unicode":"U+1F635"
    },
    {
        "emoji":"🤯",
        "meaning":"Face with exploding head",
        "unicode":"U+1F92F"
    },
    /**Concerned Faces Emojis**/
    {
        "emoji":"😕",
        "meaning":"Confused face",
        "unicode":"U+1F615"
    },
    {
        "emoji":"😟",
        "meaning":"Worried face",
        "unicode":"U+1F61F"
    },
    {
        "emoji":"🙁",
        "meaning":"Slightly frowning face",
        "unicode":"U+1F641"
    },
    {
        "emoji":"☹",
        "meaning":"Frowning face",
        "unicode":"U+2639"
    },
    {
        "emoji":"😮",
        "meaning":"Face with open mouth",
        "unicode":"U+1F62E"
    },
    {
        "emoji":"😯",
        "meaning":"Hushed face",
        "unicode":"U+1F62F"
    },
    {
        "emoji":"😲",
        "meaning":"Astonished face",
        "unicode":"U+1F632"
    },
    {
        "emoji":"😳",
        "meaning":"Flushed face",
        "unicode":"U+1F633"
    },
    {
        "emoji":"🥺",
        "meaning":"Begging face",
        "unicode":"U+1F97A"
    },
    {
        "emoji":"😦",
        "meaning":"Frowning face with open mouth",
        "unicode":"U+1F626"
    },
    {
        "emoji":"😧",
        "meaning":"Angushed face",
        "unicode":"U+1F627"
    },
    {
        "emoji":"😨",
        "meaning":"Fearful face",
        "unicode":"U+1F628"
    },
    {
        "emoji":"😰",
        "meaning":"Anxious face with sweat",
        "unicode":"U+1F630"
    },
    {
        "emoji":"😥",
        "meaning":"Sad but relieved face",
        "unicode":"U+1F625"
    },
    {
        "emoji":"😢",
        "meaning":"Crying face",
        "unicode":"U+1F622"
    },
    {
        "emoji":"😭",
        "meaning":"Loudly crying face",
        "unicode":"U+1F62D"
    },
    {
        "emoji":"😱",
        "meaning":"Screaming face",
        "unicode":"U+1F631"
    },
    {
        "emoji":"😖",
        "meaning":"Confounded face",
        "unicode":"U+1F616"
    },
    {
        "emoji":"😣",
        "meaning":"Persevering face",
        "unicode":"U+1F623"
    },
    {
        "emoji":"😞",
        "meaning":"Disappointed face",
        "unicode":"U+1F61E"
    },
    {
        "emoji":"😓",
        "meaning":"Downcast face with sweat",
        "unicode":"U+1F613"
    },
    {
        "emoji":"😩",
        "meaning":"Weary face",
        "unicode":"U+1F629"
    },
    {
        "emoji":"😫",
        "meaning":"Tired face",
        "unicode":"U+1F62B"
    },
    {
        "emoji":"🥱",
        "meaning":"Yawning face",
        "unicode":"U+1F971"
    },
    /**Negative Faces Emojis**/
    {
        "emoji":"😤",
        "meaning":"Face with steam",
        "unicode":"U+1F624"
    },
    {
        "emoji":"😡",
        "meaning":"Pouting face",
        "unicode":"U+1F621"
    },
    {
        "emoji":"😠",
        "meaning":"Angry face",
        "unicode":"U+1F620"
    },
    {
        "emoji":"🤬",
        "meaning":"Face with symbols on mouth",
        "unicode":"U+1F92C"
    },
    {
        "emoji":"😈",
        "meaning":"Smiling face with horns",
        "unicode":"U+1F608"
    },
    {
        "emoji":"👿",
        "meaning":"Angry face with horns",
        "unicode":"U+1F47F"
    },
    {
        "emoji":"💀",
        "meaning":"Skull",
        "unicode":"U+1F480"
    },
    {
        "emoji":"☠",
        "meaning":"Skull and cross-bone",
        "unicode":"U+2620"
    },
    /**Costume Faces Emojis**/
    {
        "emoji":"💩",
        "meaning":"Pile of poo",
        "unicode":"U+1F4A9"
    },
    {
        "emoji":"🤡",
        "meaning":"Clown",
        "unicode":"U+1F921"
    },
    {
        "emoji":"👹",
        "meaning":"Ogre",
        "unicode":"U+1F479"
    },
    {
        "emoji":"👺",
        "meaning":"Goblin",
        "unicode":"U+1F47A"
    },
    {
        "emoji":"👻",
        "meaning":"Ghost",
        "unicode":"U+1F47B"
    },
    {
        "emoji":"👽",
        "meaning":"Alien",
        "unicode":"U+1F47D"
    },
    {
        "emoji":"👾",
        "meaning":"Alien monster",
        "unicode":"U+1F47E"
    },
    {
        "emoji":"🤖",
        "meaning":"Robot",
        "unicode":"U+1F916"
    },
    /**Faces that require more than one unicode character**/
    /*{
        "emoji":"😶‍🌫️",
        "meaning":"Face in clouds",
        "unicode":"U+1F636 U+200D U+1F32B U+FE0F"
    },
    {
        "emoji":"😮‍💨",
        "meaning":"Face exhaling",
        "unicode":"U+1F62E U+200D U+1F4A8"
    },
    {
        "emoji":"😵‍💫",
        "meaning":"Face with spiral eyes",
        "unicode":"U+1F635 U+200D U+1F4AB"
    },
    {
        "emoji":"❤️‍🔥",
        "meaning":"Heart on fire",
        "unicode":"U+2764 U+FE0F U+200D U+1F525"
    },
    {
        "emoji":"❤️‍🩹",
        "meaning":"Mending heart",
        "unicode":"U+2764 U+FE0F U+200D U+1FA79"
    }, */
    {
        "emoji":"👁️‍🗨️",
        "meaning":"Eye in speech bubble",
        "unicode":"U+1F441 U+FE0F U+200D U+1F5E8 U+FE0F"
    },
    /* {
        "emoji":"🧔‍♂️",
        "meaning":"Man with beard",
        "unicode":"U+1F9D4 U+200D U+2642 U+FE0F"
    },
    {
        "emoji":"🧔‍♀️",
        "meaning":"Woman with beard",
        "unicode":"U+1F9D4 U+200D U+2640 U+FE0F"
    }, */
    {
        "emoji":"👨‍🦰",
        "meaning":"Man with red hair",
        "unicode":"U+1F468 U+200D U+1F9B0"
    },
    {
        "emoji":"👨‍🦱",
        "meaning":"Man with curly hair",
        "unicode":"U+1F468 U+200D U+1F9B1"
    },
    {
        "emoji":"👨‍🦳",
        "meaning":"Man with white hair",
        "unicode":"U+1F468 U+200D U+1F9B3"
    },
    {
        "emoji":"👨‍🦲",
        "meaning":"Man with bald head",
        "unicode":"U+1F468 U+200D U+1F9B2"
    },
    {
        "emoji":"👩‍🦰",
        "meaning":"Woman with red hair",
        "unicode":"U+1F469 U+200D U+1F9B0"
    },
  /*   {
        "emoji":"🧑‍🦰",
        "meaning":"Person with red hair",
        "unicode":"U+1F9D1 U+200D U+1F9B0"
    }, */
    {
        "emoji":"👩‍🦱",
        "meaning":"Woman with curly hair",
        "unicode":"U+1F469 U+200D U+1F9B1"
    },
   /*  {
        "emoji":"🧑‍🦱",
        "meaning":"Person with curly hair",
        "unicode":"U+1F9D1 U+200D U+1F9B1"
    }, */
    {
        "emoji":"👩‍🦳",
        "meaning":"Woman with white hair",
        "unicode":"U+1F469 U+200D U+1F9B3"
    },
  /*   {
        "emoji":"🧑‍🦳",
        "meaning":"Person with white hair",
        "unicode":"U+1F9D1 U+200D U+1F9B3"
    }, */
    {
        "emoji":"👩‍🦲",
        "meaning":"Woman with bald head",
        "unicode":"U+1F469 U+200D U+1F9B2"
    },
   /*  {
        "emoji":"🧑‍🦲",
        "meaning":"Person with bald head",
        "unicode":"U+1F9D1 U+200D U+1F9B2"
    }, */
    {
        "emoji":"👱‍♀️",
        "meaning":"Woman with blond hair",
        "unicode":"U+1F471 U+200D U+2640 U+FE0F"
    },
    {
        "emoji":"👱‍♂️",
        "meaning":"Man with blond hair",
        "unicode":"U+1F471 U+200D U+2642 U+FE0F"
    },
    /**Cat Faces Emojis**/
    {
        "emoji":"😺",
        "meaning":"Grinnig cat",
        "unicode":"U+1F63A"
    },
    {
        "emoji":"😸",
        "meaning":"Grinning cat with smiling eyes",
        "unicode":"U+1F638"
    },
    {
        "emoji":"😹",
        "meaning":"Grinning cat with tears",
        "unicode":"U+1F639"
    },
    {
        "emoji":"😻",
        "meaning":"Smiling cat with heart eyes",
        "unicode":"U+1F63B"
    },
    {
        "emoji":"😼",
        "meaning":"Cat with wry smile",
        "unicode":"U+1F63C"
    },
    {
        "emoji":"😽",
        "meaning":"Kissing cat",
        "unicode":"U+1F63D"
    },
    {
        "emoji":"🙀",
        "meaning":"Weary cat",
        "unicode":"U+1F640"
    },
    {
        "emoji":"😿",
        "meaning":"Crying cat",
        "unicode":"U+1F63F"
    },
    {
        "emoji":"😾",
        "meaning":"Pouting cat",
        "unicode":"U+1F63E"
    },
    /**Monkey Faces Emojis**/
    {
        "emoji":"🙈",
        "meaning":"See no evil monkey",
        "unicode":"U+1F648"
    },
    {
        "emoji":"🙉",
        "meaning":"Hear no evil monkey",
        "unicode":"U+1F649"
    },
    {
        "emoji":"🙊",
        "meaning":"Speak no evil monkey",
        "unicode":"U+1F64A"
    },
    /**Emotion Emojis**/
    {
        "emoji":"💋",
        "meaning":"Kiss",
        "unicode":"U+1F48B"
    },
    {
        "emoji":"💌",
        "meaning":"Love letter",
        "unicode":"U+1F48C"
    },
    {
        "emoji":"💘",
        "meaning":"Heart with arrow",
        "unicode":"U+1F498"
    },
    {
        "emoji":"💝",
        "meaning":"Heart with ribbon",
        "unicode":"U+1F49D"
    },
    {
        "emoji":"💖",
        "meaning":"Sparking heart",
        "unicode":"U+1F496"
    },
    {
        "emoji":"💗",
        "meaning":"Growing heart",
        "unicode":"U+1F497"
    },
    {
        "emoji":"💓",
        "meaning":"Beating heart",
        "unicode":"U+1F493"
    },
    {
        "emoji":"💞",
        "meaning":"Revolving heart",
        "unicode":"U+1F49E"
    },
    {
        "emoji":"💕",
        "meaning":"Two hearts",
        "unicode":"U+1F495"
    },
    {
        "emoji":"💟",
        "meaning":"Heart decoration",
        "unicode":"U+1F49F"
    },
    {
        "emoji":"❣",
        "meaning":"Heart exclamation",
        "unicode":"U+2763"
    },
    {
        "emoji":"💔",
        "meaning":"Broken heart",
        "unicode":"U+1F494"
    },
    {
        "emoji":"❤️‍🔥",
        "meaning":"Heart on fire",
        "unicode":"U+2764"
    },
    {
        "emoji":"❤️‍🩹",
        "meaning":"Mending heart",
        "unicode":"U+2764"
    },
    {
        "emoji":"❤",
        "meaning":"Red heart",
        "unicode":"U+2764"
    },
    {
        "emoji":"🧡",
        "meaning":"Orange heart",
        "unicode":"U+1F9E1"
    },
    {
        "emoji":"💛",
        "meaning":"Yellow heart",
        "unicode":"U+1F49B"
    },
    {
        "emoji":"💚",
        "meaning":"Green heart",
        "unicode":"U+1F49A"
    },
    {
        "emoji":"💙",
        "meaning":"Blue heart",
        "unicode":"U+1F499"
    },
    {
        "emoji":"💜",
        "meaning":"Purple heart",
        "unicode":"U+1F49C"
    },
    {
        "emoji":"🤎",
        "meaning":"Brown heart",
        "unicode":"U+1F90E"
    },
    {
        "emoji":"🖤",
        "meaning":"Black heart",
        "unicode":"U+1F5A4"
    },
    {
        "emoji":"🤍",
        "meaning":"White heart",
        "unicode":"U+1F90D"
    },
    {
        "emoji":"💯",
        "meaning":"Hundred(correct)",
        "unicode":"U+1F4AF"
    },
    {
        "emoji":"💢",
        "meaning":"Anger",
        "unicode":"U+1F4A2"
    },
    {
        "emoji":"💥",
        "meaning":"Collision",
        "unicode":"U+1F4A5"
    },
    {
        "emoji":"💫",
        "meaning":"Dizzy",
        "unicode":"U+1F4AB"
    },
    {
        "emoji":"💦",
        "meaning":"Sweat droplets",
        "unicode":"U+1F4A6"
    },
    {
        "emoji":"💨",
        "meaning":"Dashing away",
        "unicode":"U+1F4A8"
    },
    {
        "emoji":"🕳",
        "meaning":"Hole",
        "unicode":"U+1F573"
    },
    {
        "emoji":"💣",
        "meaning":"Bomb",
        "unicode":"U+1F4A3"
    },
    {
        "emoji":"💬",
        "meaning":"Message baloon",
        "unicode":"U+1F4AC"
    },
    {
        "emoji":"👁️‍🗨️",
        "meaning":"Eye in speech bubble",
        "unicode":"U+1F441"
    },
    {
        "emoji":"🗨",
        "meaning":"Left speech bubble",
        "unicode":"U+1F5E8"
    },
    {
        "emoji":"🗯",
        "meaning":"Anger bubble",
        "unicode":"U+1F5EF"
    },
    {
        "emoji":"💭",
        "meaning":"Thought baloon",
        "unicode":"U+1F4AD"
    },
    {
        "emoji":"💤",
        "meaning":"zzz",
        "unicode":"U+1F4A4"
    },
    /**Hands and other Body Parts Emojis**/
    {
        "emoji":"👋",
        "meaning":"Waving hand",
        "unicode":"U+1F44B"
    },
    {
        "emoji":"🖖",
        "meaning":"Vulcan salute",
        "unicode":"U+1F596"
    },
    {
        "emoji":"👌",
        "meaning":"Ok",
        "unicode":"U+1F44C"
    },
    {
        "emoji":"🤌",
        "meaning":"Pinched fingers",
        "unicode":"U+1F90C"
    },
    {
        "emoji":"🤏",
        "meaning":"Pinched hand",
        "unicode":"U+1F90F"
    },
    {
        "emoji":"✌",
        "meaning":"Victory hand",
        "unicode":"U+270C"
    },
    {
        "emoji":"🤞",
        "meaning":"Crossed fingers",
        "unicode":"U+1F91E"
    },
    {
        "emoji":"🤟",
        "meaning":"Love you",
        "unicode":"U+1F91F"
    },
    {
        "emoji":"🤙",
        "meaning":"Call me hand",
        "unicode":"U+1F919"
    },
    {
        "emoji":"👈",
        "meaning":"Index finger pointing left",
        "unicode":"U+1F448"
    },
    {
        "emoji":"👉",
        "meaning":"Index finger pointing right",
        "unicode":"U+1F449"
    },
    {
        "emoji":"👇",
        "meaning":"Index finger pointing down",
        "unicode":"U+1F447"
    },
    {
        "emoji":"🖕",
        "meaning":"Middle finger",
        "unicode":"U+1F595"
    },
    {
        "emoji":"☝",
        "meaning":"Forehand Index finger pointing up",
        "unicode":"U+261D"
    },
    {
        "emoji":"🫵",
        "meaning":"Index finger pointing at viewer",
        "unicode":"U+1FAF5"
    },
    {
        "emoji":"👍",
        "meaning":"Thumbs up",
        "unicode":"U+1F44D"
    },
    {
        "emoji":"👎",
        "meaning":"Thumbs down",
        "unicode":"U+1F44E"
    },
    {
        "emoji":"✊",
        "meaning":"Raised fist",
        "unicode":"U+270A"
    },
    {
        "emoji":"👊",
        "meaning":"Fist",
        "unicode":"U+1F44A"
    },
    {
        "emoji":"🤛",
        "meaning":"Left facing fist",
        "unicode":"U+1F91B"
    },
    {
        "emoji":"🤜",
        "meaning":"Right facing fist",
        "unicode":"U+1F91C"
    },
    {
        "emoji":"👏",
        "meaning":"Clapping hands",
        "unicode":"U+1F44F"
    },
    {
        "emoji":"🙌",
        "meaning":"Raised hands",
        "unicode":"U+1F64C"
    },
    {
        "emoji":"👐",
        "meaning":"Open hands",
        "unicode":"U+1F450"
    },
    {
        "emoji":"🤲",
        "meaning":"Palms together hands",
        "unicode":"U+1F932"
    },
    {
        "emoji":"🤝",
        "meaning":"Handshake",
        "unicode":"U+1F91D"
    },
    {
        "emoji":"🙏",
        "meaning":"Praying hands",
        "unicode":"U+1F64F"
    },
    {
        "emoji":"✍",
        "meaning":"Writing hands",
        "unicode":"U+270D"
    },
    {
        "emoji":"💅",
        "meaning":"Nail polish",
        "unicode":"U+1F485"
    },
    {
        "emoji":"🤳",
        "meaning":"Selfie hand",
        "unicode":"U+1F933"
    },
    {
        "emoji":"💪",
        "meaning":"Flexed biceps",
        "unicode":"U+1F4AA"
    },
    {
        "emoji":"🦾",
        "meaning":"Mechanical arm",
        "unicode":"U+1F9BE"
    },
    {
        "emoji":"🦵",
        "meaning":"Leg",
        "unicode":"U+1F9B5"
    },
    {
        "emoji":"🦿",
        "meaning":"Mechanical leg",
        "unicode":"U+1F9BF"
    },
    {
        "emoji":"🦶",
        "meaning":"Foot",
        "unicode":"U+1F9B6"
    },
    {
        "emoji":"👂",
        "meaning":"Ear",
        "unicode":"U+1F442"
    },
    {
        "emoji":"🦻",
        "meaning":"Ear with earing aid",
        "unicode":"U+1F9BB"
    },
    {
        "emoji":"👃",
        "meaning":"Nose",
        "unicode":"U+1F443"
    },
    {
        "emoji":"🧠",
        "meaning":"Brain",
        "unicode":"U+1F9E0"
    },
    {
        "emoji":"👣",
        "meaning":"Footprint",
        "unicode":"U+1F463"
    },
    {
        "emoji":"🫀",
        "meaning":"Mechanical heart",
        "unicode":"U+1FAC0"
    },
    {
        "emoji":"🫁",
        "meaning":"Lungs",
        "unicode":"U+1FAC1"
    },
    {
        "emoji":"🦷",
        "meaning":"Tooth",
        "unicode":"U+1F9B7"
    },
    {
        "emoji":"🦴",
        "meaning":"Bone",
        "unicode":"U+1F9B7"
    },
    {
        "emoji":"👀",
        "meaning":"Eyes",
        "unicode":"U+1F440"
    },
    {
        "emoji":"👁",
        "meaning":"Eye",
        "unicode":"U+1F441"
    },
    {
        "emoji":"👅",
        "meaning":"Langue",
        "unicode":"U+1F445"
    },
    {
        "emoji":"👄",
        "meaning":"Mouth",
        "unicode":"U+1F444"
    },
    /**Person Emojis**/
    /**Family Emojis**/
    /**Animals and Nature Emojis**/
    /**Food and Drinks Emojis**/
    /**Travel and Places Emojis**/
    /**Transport Emojis**/
    /**Time Emojis**/
    /**Sky and Weather Emojis**/
    /**Activity Emojis**/
    /**Award Medals Emojis**/
    /**Sport Emojis**/
    /**Games Emojis**/
    /**Arts and Crafts Emojis**/
    /**Clothing Objects Emojis**/
    /**Sound Emojis**/
    /**Musical Instrument Emojis**/
    /**Phone Emojis**/
    /**Computer Emojis**/
    /**Light and Video Emojis**/
    /**Book and Paper Emojis**/
    /**Mail Emojis**/
    /**Writing Emojis**/
    /**Office Emojis**/
    /**Lock Emojis**/
    /**Tools Emojis**/
    /**Science Emojis**/
    /**Household Emojis**/
    /**Other Objects Emojis**/
    /**Symbols**/
    /**Warning Emojis**/
    /**Arrow Emojis**/
    /**Religion**/
    /**Zodiac**/
    /**AV Symbols**/
    /**Gender**/
    /**Math Symbols**/
    /**Punctuation Symbols**/
    /**Currency**/
    /**Other Symbols**/
    /**Keycap**/
    /**Alphanumeric Symbols**/
    /**Japanese Buttons**/
    /**Geometric Emojis**/
    /**Flags**/
    /**Country Flags**/
    {
        "emoji":"🇦🇨",
        "meaning":"Ascension Island flag",
        "unicode":"U+1F1E6 U+1F1E8"
    },
    {
        "emoji":"🇦🇩",
        "meaning":"Andorra flag",
        "unicode":"U+1F1E6 U+1F1E9"
    },
    {
        "emoji":"🇦🇪",
        "meaning":"UAE flag",
        "unicode":"U+1F1E6 U+1F1EA"
    },
    {
        "emoji":"🇦🇪",
        "meaning":"UAE flag",
        "unicode":"U+1F1E6 U+1F1EA"
    },
    {
        "emoji":"🇦🇫",
        "meaning":"Afghanistan flag",
        "unicode":"U+1F1E6 U+1F1EB"
    },
    {
        "emoji":"🇦🇬",
        "meaning":"Antigua & Barbuda flag",
        "unicode":"U+1F1E6 U+1F1EC"
    },
    {
        "emoji":"🇦🇮",
        "meaning":"Anguilla flag",
        "unicode":"U+1F1E6 U+1F1EE"
    },
    {
        "emoji":"🇦🇱",
        "meaning":"Albania",
        "unicode":"U+1F1E6 U+1F1F1"
    },
    {
        "emoji":"🇩🇿",
        "meaning":"Algeria flag",
        "unicode":"U+1F1E9 U+1F1FF"
    },
    {
        "emoji":"🇦🇲",
        "meaning":"Armenia flag",
        "unicode":"U+1F1E6 U+1F1F2"
    },
    {
        "emoji":"🇦🇴",
        "meaning":"Angola flag",
        "unicode":"U+1F1E6 U+1F1F4"
    },
    {
        "emoji":"🇦🇶",
        "meaning":"Antarctica flag",
        "unicode":"U+1F1E6 U+1F1F6"
    },
    {
        "emoji":"🇦🇷",
        "meaning":"Argentina flag",
        "unicode":"U+1F1E6 U+1F1F7"
    },
    {
        "emoji":"🇦🇸",
        "meaning":"American Samoa flag",
        "unicode":"U+1F1E6 U+1F1F8"
    },
    {
        "emoji":"🇦🇸",
        "meaning":"American Samoa flag",
        "unicode":"U+1F1E6 U+1F1F8"
    },
    {
        "emoji":"🇦🇹",
        "meaning":"Austria flag",
        "unicode":"U+1F1E6 U+1F1F9"
    },
    {
        "emoji":"🇦🇺",
        "meaning":"Australia flag",
        "unicode":"U+1F1E6 U+1F1FA"
    },
    {
        "emoji":"🇦🇼",
        "meaning":"Aruba flag",
        "unicode":"U+1F1E6 U+1F1FC"
    },
    {
        "emoji":"🇦🇽",
        "meaning":"Åland Islands flag",
        "unicode":"U+1F1E6 U+1F1FD"
    },
    {
        "emoji":"🇦🇿",
        "meaning":"Azerbaijan flag",
        "unicode":"U+1F1E6 U+1F1FF"
    },
    {
        "emoji":"🇧🇦",
        "meaning":"Bosnia & Herzegovina flag",
        "unicode":"U+1F1E7 U+1F1E6"
    },
    {
        "emoji":"🇧🇩",
        "meaning":"Bangladesh flag",
        "unicode":"U+1F1E7 U+1F1E9"
    },
    {
        "emoji":"🇧🇪",
        "meaning":"Belgium flag",
        "unicode":"U+1F1E7 U+1F1EA"
    },
    {
        "emoji":"🇧🇫",
        "meaning":"Burkina Faso flag",
        "unicode":"U+1F1E7 U+1F1EB"
    },
    {
        "emoji":"🇧🇬",
        "meaning":"Bulgaria flag",
        "unicode":"U+1F1E7 U+1F1EC"
    },
    {
        "emoji":"🇧🇭",
        "meaning":"Bahrain flag",
        "unicode":"U+1F1E7 U+1F1ED"
    },
    {
        "emoji":"🇧🇮",
        "meaning":"Burundi flag",
        "unicode":"U+1F1E7 U+1F1EE"
    },
    {
        "emoji":"🇧🇯",
        "meaning":"Benin Republic flag",
        "unicode":"U+1F1E7 U+1F1EF"
    },
    {
        "emoji":"🇧🇱",
        "meaning":"St. Barthélemy flag",
        "unicode":"U+1F1E7 U+1F1F1"
    },
    {
        "emoji":"🇧🇲",
        "meaning":"Bermuda flag",
        "unicode":"U+1F1E7 U+1F1F2"
    },
    {
        "emoji":"🇧🇳",
        "meaning":"Brunei flag",
        "unicode":"U+1F1E7 U+1F1F3"
    },
    {
        "emoji":"🇧🇴",
        "meaning":"Bolivia flag",
        "unicode":"U+1F1E7 U+1F1F4"
    },
    {
        "emoji":"🇧🇶",
        "meaning":"Caribbean Netherlands flag",
        "unicode":"U+1F1E7 U+1F1F6"
    },
    {
        "emoji":"🇧🇷",
        "meaning":"Brazil flag",
        "unicode":"U+1F1E7 U+1F1F7"
    },
    {
        "emoji":"🇧🇸",
        "meaning":"Bahamas flag",
        "unicode":"U+1F1E7 U+1F1F8"
    },
    {
        "emoji":"🇧🇹",
        "meaning":"Bhutan flag",
        "unicode":"U+1F1E7 U+1F1F9"
    },
    {
        "emoji":"🇧🇻",
        "meaning":"Bouvet Island flag",
        "unicode":"U+1F1E7 U+1F1FB"
    },
    {
        "emoji":"🇧🇼",
        "meaning":"Botswana flag",
        "unicode":"U+1F1E7 U+1F1FC"
    },
    {
        "emoji":"🇧🇾",
        "meaning":"Belarus flag",
        "unicode":"U+1F1E7 U+1F1FE"
    },
    {
        "emoji":"🇧🇿",
        "meaning":"Belize flag",
        "unicode":"U+1F1E7 U+1F1FF"
    },
    {
        "emoji":"🇨🇦",
        "meaning":"Canada flag",
        "unicode":"U+1F1E8 U+1F1E6"
    },
    {
        "emoji":"🇨🇨",
        "meaning":"Cocos (Keeling) Islands flag",
        "unicode":"U+1F1E8 U+1F1E8"
    },
    {
        "emoji":"🇨🇩",
        "meaning":"DR Congo flag",
        "unicode":"U+1F1E8 U+1F1E9"
    },
    {
        "emoji":"🇨🇫",
        "meaning":"Central African Republic flag",
        "unicode":"U+1F1E8 U+1F1EB"
    },
    {
        "emoji":"🇨🇬",
        "meaning":"Congo Brazzaville flag",
        "unicode":"U+1F1E8 U+1F1EC"
    },
    {
        "emoji":"🇨🇭",
        "meaning":"Switzerland flag",
        "unicode":"U+1F1E8 U+1F1ED"
    },
    {
        "emoji":"🇨🇮",
        "meaning":"Côte d’Ivoire flag",
        "unicode":"U+1F1E8 U+1F1EE"
    },
    {
        "emoji":"🇨🇰",
        "meaning":"Cook Islands flag",
        "unicode":"U+1F1E8 U+1F1F0"
    },
    {
        "emoji":"🇨🇱",
        "meaning":"Chile flag",
        "unicode":"U+1F1E8 U+1F1F1"
    },
    {
        "emoji":"🇨🇲",
        "meaning":"Cameroon flag",
        "unicode":"U+1F1E8 U+1F1F2"
    },
    {
        "emoji":"🇨🇳",
        "meaning":"China flag",
        "unicode":"U+1F1E8 U+1F1F3"
    },
    {
        "emoji":"🇨🇴",
        "meaning":"Columbia flag",
        "unicode":"U+1F1E8 U+1F1F4"
    },
    {
        "emoji":"🇨🇵",
        "meaning":"Clipperton Island flag",
        "unicode":"U+1F1E8 U+1F1F5"
    },
    {
        "emoji":"🇨🇷",
        "meaning":"Costa Rica flag",
        "unicode":"U+1F1E8 U+1F1F7"
    },
    {
        "emoji":"🇨🇺",
        "meaning":"Cuba flag",
        "unicode":"U+1F1E8 U+1F1FA"
    },
    {
        "emoji":"🇨🇻",
        "meaning":"Cape Verde flag",
        "unicode":"U+1F1E8 U+1F1FB"
    },
    {
        "emoji":"🇨🇼",
        "meaning":"Curaçao flag",
        "unicode":"U+1F1E8 U+1F1FC"
    },
    {
        "emoji":"🇨🇽",
        "meaning":"Christmas Island flag",
        "unicode":"U+1F1E8 U+1F1FD"
    },
    {
        "emoji":"🇨🇾",
        "meaning":"Cyprus flag",
        "unicode":"U+1F1E8 U+1F1FE"
    },
    {
        "emoji":"🇨🇿",
        "meaning":"Czech Republic flag",
        "unicode":"U+1F1E8 U+1F1FF"
    },
    {
        "emoji":"🇩🇪",
        "meaning":"Germany flag",
        "unicode":"U+1F1E9 U+1F1EA"
    },
    {
        "emoji":"🇩🇬",
        "meaning":"Diego Garcia flag",
        "unicode":"U+1F1E9 U+1F1EC"
    },
    {
        "emoji":"🇩🇯",
        "meaning":"Djibouti flag",
        "unicode":"U+1F1E9 U+1F1EF"
    },
    {
        "emoji":"🇩🇰",
        "meaning":"Denmark flag",
        "unicode":"U+1F1E9 U+1F1F0"
    },
    {
        "emoji":"🇩🇲",
        "meaning":"Dominica flag",
        "unicode":"U+1F1E9 U+1F1F2"
    },
    {
        "emoji":"🇩🇴",
        "meaning":"Dominican Republic flag",
        "unicode":"U+1F1E9 U+1F1F4"
    },
    {
        "emoji":"🇪🇦",
        "meaning":"Ceuta & Melilla flag",
        "unicode":"U+1F1EA U+1F1E6"
    },
    {
        "emoji":"🇪🇨",
        "meaning":"Ecuador flag",
        "unicode":"U+1F1EA U+1F1E8"
    },
    {
        "emoji":"🇪🇪",
        "meaning":"Estonia flag",
        "unicode":"U+1F1EA U+1F1EA"
    },
    {
        "emoji":"🇪🇬",
        "meaning":"Egypt flag",
        "unicode":"U+1F1EA U+1F1EC"
    },
    {
        "emoji":"🇪🇭",
        "meaning":"Western Sahara flag",
        "unicode":"U+1F1EA U+1F1ED"
    },
    {
        "emoji":"🇪🇷",
        "meaning":"Eritre flag",
        "unicode":"U+1F1EA U+1F1F7"
    },
    {
        "emoji":"🇪🇷",
        "meaning":"Eritre flag",
        "unicode":"U+1F1EA U+1F1F7"
    },
    {
        "emoji":"🇪🇸",
        "meaning":"Spain flag",
        "unicode":"U+1F1EA U+1F1F8"
    },
    {
        "emoji":"🇪🇹",
        "meaning":"Ethiopia flag",
        "unicode":"U+1F1EA U+1F1F9"
    },
    {
        "emoji":"🇪🇺",
        "meaning":"European Union flag",
        "unicode":"U+1F1EA U+1F1FA"
    },
    {
        "emoji":"🇫🇮",
        "meaning":"Finalnd flag",
        "unicode":"U+1F1EB U+1F1EE"
    },
    {
        "emoji":"🇫🇯",
        "meaning":"Fiji Island flag",
        "unicode":"U+1F1EB U+1F1EF"
    },
    {
        "emoji":"🇫🇰",
        "meaning":"Falkland Islands flag",
        "unicode":"U+1F1EB U+1F1F0"
    },
    {
        "emoji":"🇫🇲",
        "meaning":"Micronesia flag",
        "unicode":"U+1F1EB U+1F1F2"
    },
    {
        "emoji":"🇫🇴",
        "meaning":"Faroe Islands flag",
        "unicode":"U+1F1EB U+1F1F4"
    },
    {
        "emoji":"🇫🇷",
        "meaning":"France flag",
        "unicode":"U+1F1EB U+1F1F7"
    },
    {
        "emoji":"🇬🇦",
        "meaning":"Gabon flag",
        "unicode":"U+1F1EC U+1F1E6"
    },
    {
        "emoji":"🇬🇧",
        "meaning":"United Kingdom flag",
        "unicode":"U+1F1EC U+1F1E7"
    },
    {
        "emoji":"🇬🇩",
        "meaning":"Grenada flag",
        "unicode":"U+1F1EC U+1F1E9"
    },
    {
        "emoji":"🇬🇪",
        "meaning":"Georgia flag",
        "unicode":"U+1F1EC U+1F1EA"
    },
    {
        "emoji":"🇬🇫",
        "meaning":"French Guiana flag",
        "unicode":"U+1F1EC U+1F1EB"
    },
    {
        "emoji":"🇬🇬",
        "meaning":"Guernsey flag",
        "unicode":"U+1F1EC U+1F1EC"
    },
    {
        "emoji":"🇬🇭",
        "meaning":"Ghana flag",
        "unicode":"U+1F1EC U+1F1ED"
    },
    {
        "emoji":"🇬🇮",
        "meaning":"Gibraltar flag",
        "unicode":"U+1F1EC U+1F1EE"
    },
    {
        "emoji":"🇬🇱",
        "meaning":"Greenland flag",
        "unicode":"U+1F1EC U+1F1F1"
    },
    {
        "emoji":"🇬🇲",
        "meaning":"Gambia flag",
        "unicode":"U+1F1EC U+1F1F2"
    },
    {
        "emoji":"🇬🇳",
        "meaning":"Guinea flag",
        "unicode":"U+1F1EC U+1F1F3"
    },
    {
        "emoji":"🇬🇵",
        "meaning":"Guadeloupe flag",
        "unicode":"U+1F1EC U+1F1F5"
    },
    {
        "emoji":"🇬🇶",
        "meaning":"Equatorial Guinea flag",
        "unicode":"U+1F1EC U+1F1F6"
    },
    {
        "emoji":"🇬🇷",
        "meaning":"Greece flag",
        "unicode":"U+1F1EC U+1F1F7"
    },
    {
        "emoji":"🇬🇸",
        "meaning":"South Georgia & South Sandwich Islands flag",
        "unicode":"U+1F1EC U+1F1F8"
    },
    {
        "emoji":"🇬🇹",
        "meaning":"Guatemala flag",
        "unicode":"U+1F1EC U+1F1F9"
    },
    {
        "emoji":"🇬🇺",
        "meaning":"Guam flag",
        "unicode":"U+1F1EC U+1F1FA"
    },
    {
        "emoji":"🇬🇼",
        "meaning":"Guinea Bissau flag",
        "unicode":"U+1F1EC U+1F1FC"
    },
    {
        "emoji":"🇬🇾",
        "meaning":"Guyana flag",
        "unicode":"U+1F1EC U+1F1FE"
    },
    {
        "emoji":"🇭🇰",
        "meaning":"Hong Kong SAR China flag",
        "unicode":"U+1F1ED U+1F1F0"
    },
    {
        "emoji":"🇭🇲",
        "meaning":"Heard & McDonald Islands flag",
        "unicode":"U+1F1ED U+1F1F2"
    },
    {
        "emoji":"🇭🇳",
        "meaning":"Honduras flag",
        "unicode":"U+1F1ED U+1F1F3"
    },
    {
        "emoji":"🇭🇷",
        "meaning":"Croatia flag",
        "unicode":"U+1F1ED U+1F1F7"
    },
    {
        "emoji":"🇭🇹",
        "meaning":"Haiti flag",
        "unicode":"U+1F1ED U+1F1F9"
    },
    {
        "emoji":"🇭🇺",
        "meaning":"Hungary flag",
        "unicode":"U+1F1ED U+1F1FA"
    },
    {
        "emoji":"🇮🇨",
        "meaning":"Canary Islands flag",
        "unicode":"U+1F1EE U+1F1E8"
    },
    {
        "emoji":"🇮🇩",
        "meaning":"Indonesia flag",
        "unicode":"U+1F1EE U+1F1E9"
    },
    {
        "emoji":"🇮🇪",
        "meaning":"Ireland flag",
        "unicode":"U+1F1EE U+1F1EA"
    },
    {
        "emoji":"🇮🇱",
        "meaning":"Israel flag",
        "unicode":"U+1F1EE U+1F1F1"
    },
    {
        "emoji":"🇮🇲",
        "meaning":"Isle of Man flag",
        "unicode":"U+1F1EE U+1F1F2"
    },
    {
        "emoji":"🇮🇳",
        "meaning":"India flag",
        "unicode":"U+1F1EE U+1F1F3"
    },
    {
        "emoji":"🇮🇴",
        "meaning":"British Indian Ocean Territory flag",
        "unicode":"U+1F1EE U+1F1F4"
    },
    {
        "emoji":"🇮🇶",
        "meaning":"Iraq flag",
        "unicode":"U+1F1EE U+1F1F6"
    },
    {
        "emoji":"🇮🇷",
        "meaning":"Iran flag",
        "unicode":"U+1F1EE U+1F1F7"
    },
    {
        "emoji":"🇮🇸",
        "meaning":"Iceland flag",
        "unicode":"U+1F1EE U+1F1F8"
    },
    {
        "emoji":"🇮🇹",
        "meaning":"Italy flag",
        "unicode":"U+1F1EE U+1F1F9"
    },
    {
        "emoji":"🇯🇪",
        "meaning":"Jersey flag",
        "unicode":"U+1F1EF U+1F1EA"
    },
    {
        "emoji":"🇯🇲",
        "meaning":"Jamaica flag",
        "unicode":"U+1F1EF U+1F1F2"
    },
    {
        "emoji":"🇯🇴",
        "meaning":"Jordan flag",
        "unicode":"U+1F1EF U+1F1F4"
    },
    {
        "emoji":"🇯🇵",
        "meaning":"Japan flag",
        "unicode":"U+1F1EF U+1F1F5"
    },
    {
        "emoji":"🇰🇪",
        "meaning":"Kenya flag",
        "unicode":"U+1F1F0 U+1F1EA"
    },
    {
        "emoji":"🇰🇬",
        "meaning":"Kyrgyzstan flag",
        "unicode":"U+1F1F0 U+1F1EC"
    },
    {
        "emoji":"🇰🇭",
        "meaning":"Cambodia flag",
        "unicode":"U+1F1F0 U+1F1ED"
    },
    {
        "emoji":"🇰🇮",
        "meaning":"Kiribati flag",
        "unicode":"U+1F1F0 U+1F1EE"
    },
    {
        "emoji":"🇰🇲",
        "meaning":"Comoros flag",
        "unicode":"U+1F1F0 U+1F1F2"
    },
    {
        "emoji":"🇰🇳",
        "meaning":"St. Kitts & Nevis flag",
        "unicode":"U+1F1F0 U+1F1F3"
    },
    {
        "emoji":"🇰🇵",
        "meaning":"North Korea flag",
        "unicode":"U+1F1F0 U+1F1F5"
    },
    {
        "emoji":"🇰🇷",
        "meaning":"South Korea flag",
        "unicode":"U+1F1F0 U+1F1F7"
    },
    {
        "emoji":"🇰🇼",
        "meaning":"Kuwait flag",
        "unicode":"U+1F1F0 U+1F1FC"
    },
    {
        "emoji":"🇰🇾",
        "meaning":"Cayman Islands flag",
        "unicode":"U+1F1F0 U+1F1FE"
    },
    {
        "emoji":"🇰🇿",
        "meaning":"Kazakhstan flag",
        "unicode":"U+1F1F0 U+1F1FF"
    },
    {
        "emoji":"🇱🇦",
        "meaning":"Laos flag",
        "unicode":"U+1F1F1 U+1F1E6"
    },
    {
        "emoji":"🇱🇧",
        "meaning":"Lebanon flag",
        "unicode":"U+1F1F1 U+1F1E7"
    },
    {
        "emoji":"🇱🇨",
        "meaning":"St. Lucia flag",
        "unicode":"U+1F1F1 U+1F1E8"
    },
    {
        "emoji":"🇱🇮",
        "meaning":"Liechtenstein flag",
        "unicode":"U+1F1F1 U+1F1EE"
    },
    {
        "emoji":"🇱🇰",
        "meaning":"Sri Lanka flag",
        "unicode":"U+1F1F1 U+1F1F0"
    },
    {
        "emoji":"🇱🇷",
        "meaning":"Liberia flag",
        "unicode":"U+1F1F1 U+1F1F7"
    },
    {
        "emoji":"🇱🇸",
        "meaning":"Lesotho flag",
        "unicode":"U+1F1F1 U+1F1F8"
    },
    {
        "emoji":"🇱🇹",
        "meaning":"Lithuania flag",
        "unicode":"U+1F1F1 U+1F1F9"
    },
    {
        "emoji":"🇱🇺",
        "meaning":"Luxembourg flag",
        "unicode":"U+1F1F1 U+1F1FA"
    },
    {
        "emoji":"🇱🇻",
        "meaning":"Latvia flag",
        "unicode":"U+1F1F1 U+1F1FB"
    },
    {
        "emoji":"🇱🇾",
        "meaning":"Libya flag",
        "unicode":"U+1F1F1 U+1F1FE"
    },
    {
        "emoji":"🇲🇦",
        "meaning":"Morocco flag",
        "unicode":"U+1F1F2 U+1F1E6"
    },
    {
        "emoji":"🇲🇨",
        "meaning":"Monaco flag",
        "unicode":"U+1F1F2 U+1F1E8"
    },
    {
        "emoji":"🇲🇩",
        "meaning":"Moldova flag",
        "unicode":"U+1F1F2 U+1F1E9"
    },
    {
        "emoji":"🇲🇪",
        "meaning":"Montenegro flag",
        "unicode":"U+1F1F2 U+1F1EA"
    },
    {
        "emoji":"🇲🇫",
        "meaning":"St. Martin flag",
        "unicode":"U+1F1F2 U+1F1EB"
    },
    {
        "emoji":"🇲🇬",
        "meaning":"Madagascar flag",
        "unicode":"U+1F1F2 U+1F1EC"
    },
    {
        "emoji":"🇲🇭",
        "meaning":"Marshall Islands flag",
        "unicode":"U+1F1F2 U+1F1ED"
    },
    {
        "emoji":"🇲🇰",
        "meaning":"North Macedonia flag",
        "unicode":"U+1F1F2 U+1F1F0"
    },
    {
        "emoji":"🇲🇱",
        "meaning":"Mali flag",
        "unicode":"U+1F1F2 U+1F1F1"
    },
    {
        "emoji":"🇲🇲",
        "meaning":"Myanmar flag",
        "unicode":"U+1F1F2 U+1F1F2"
    },
    {
        "emoji":"🇲🇳",
        "meaning":"Mongolia flag",
        "unicode":"U+1F1F2 U+1F1F3"
    },
    {
        "emoji":"🇲🇴",
        "meaning":"Macao SAR China flag",
        "unicode":"U+1F1F2 U+1F1F4"
    },
    {
        "emoji":"🇲🇵",
        "meaning":"Northern Mariana Islands flag",
        "unicode":"U+1F1F2 U+1F1F5"
    },
    {
        "emoji":"🇲🇶",
        "meaning":"Martinique flag",
        "unicode":"U+1F1F2 U+1F1F6"
    },
    {
        "emoji":"🇲🇷",
        "meaning":"Mauritania flag",
        "unicode":"U+1F1F2 U+1F1F7"
    },
    {
        "emoji":"🇲🇸",
        "meaning":"Montserrat flag",
        "unicode":"U+1F1F2 U+1F1F8"
    },
    {
        "emoji":"🇲🇹",
        "meaning":"Malta flag",
        "unicode":"U+1F1F2 U+1F1F9"
    },
    {
        "emoji":"🇲🇺",
        "meaning":"Mauritius flag",
        "unicode":"U+1F1F2 U+1F1FA"
    },
    {
        "emoji":"🇲🇻",
        "meaning":"Maldives flag",
        "unicode":"U+1F1F2 U+1F1FB"
    },
    {
        "emoji":"🇲🇼",
        "meaning":"Malawi flag",
        "unicode":"U+1F1F2 U+1F1FC"
    },
    {
        "emoji":"🇲🇽",
        "meaning":"Mexico flag",
        "unicode":"U+1F1F2 U+1F1FD"
    },
    {
        "emoji":"🇲🇾",
        "meaning":"Malaysia flag",
        "unicode":"U+1F1F2 U+1F1FE"
    },
    {
        "emoji":"🇲🇿",
        "meaning":"Mozambique flag",
        "unicode":"U+1F1F2 U+1F1FF"
    },
    {
        "emoji":"🇳🇦",
        "meaning":"Namibia flag",
        "unicode":"U+1F1F3 U+1F1E6"
    },
    {
        "emoji":"🇳🇨",
        "meaning":"New Caledonia flag",
        "unicode":"U+1F1F3 U+1F1E8"
    },
    {
        "emoji":"🇳🇪",
        "meaning":"Niger Republic flag",
        "unicode":"U+1F1F3 U+1F1EA"
    },
    {
        "emoji":"🇳🇬",
        "meaning":"Nigeria flag",
        "unicode":"U+1F1F3 U+1F1EC"
    },
    {
        "emoji":"🇳🇫",
        "meaning":"Norfolk Island flag",
        "unicode":"U+1F1F3 U+1F1EB"
    },
    {
        "emoji":"🇳🇮",
        "meaning":"Nicaragua flag",
        "unicode":"U+1F1F3 U+1F1EE"
    },
    {
        "emoji":"🇳🇱",
        "meaning":"Netherlands flag",
        "unicode":"U+1F1F3 U+1F1F1"
    },
    {
        "emoji":"🇳🇴",
        "meaning":"Norway flag",
        "unicode":"U+1F1F3 U+1F1F4"
    },
    {
        "emoji":"🇳🇵",
        "meaning":"Nepal flag",
        "unicode":"U+1F1F3 U+1F1F5"
    },
    {
        "emoji":"🇳🇷",
        "meaning":"Nauru flag",
        "unicode":"U+1F1F3 U+1F1F7"
    },
    {
        "emoji":"🇳🇺",
        "meaning":"Niue flag",
        "unicode":"U+1F1F3 U+1F1FA"
    },
    {
        "emoji":"🇳🇿",
        "meaning":"New Zealand flag",
        "unicode":"U+1F1F3 U+1F1FF"
    },
    {
        "emoji":"🇴🇲",
        "meaning":"Oman flag",
        "unicode":"U+1F1F4 U+1F1F2"
    },
    {
        "emoji":"🇵🇦",
        "meaning":"Panama flag",
        "unicode":"U+1F1F5 U+1F1E6"
    },
    {
        "emoji":"🇵🇪",
        "meaning":"Peru flag",
        "unicode":"U+1F1F5 U+1F1EA"
    },
    {
        "emoji":"🇵🇫",
        "meaning":"French Polynesia flag",
        "unicode":"U+1F1F5 U+1F1EB"
    },
    {
        "emoji":"🇵🇬",
        "meaning":"Papua New Guinea flag",
        "unicode":"U+1F1F5 U+1F1EC"
    },
    {
        "emoji":"🇵🇭",
        "meaning":"Philippines flag",
        "unicode":"U+1F1F5 U+1F1ED"
    },
    {
        "emoji":"🇵🇰",
        "meaning":"Pakistan flag",
        "unicode":"U+1F1F5 U+1F1F0"
    },
    {
        "emoji":"🇵🇱",
        "meaning":"Poland flag",
        "unicode":"U+1F1F5 U+1F1F1"
    },
    {
        "emoji":"🇵🇲",
        "meaning":"St. Pierre & Miquelon flag",
        "unicode":"U+1F1F5 U+1F1F2"
    },
    {
        "emoji":"🇵🇳",
        "meaning":"itcairn Islands flag",
        "unicode":"U+1F1F5 U+1F1F3"
    },
    {
        "emoji":"🇵🇷",
        "meaning":"Puerto Rico flag",
        "unicode":"U+1F1F5 U+1F1F7"
    },
    {
        "emoji":"🇵🇸",
        "meaning":"Palestinian Territories flag",
        "unicode":"U+1F1F5 U+1F1F8"
    },
    {
        "emoji":"🇵🇹",
        "meaning":"Portugal flag",
        "unicode":"U+1F1F5 U+1F1F9"
    },
    {
        "emoji":"🇵🇼",
        "meaning":"Palau flag",
        "unicode":"U+1F1F5 U+1F1FC"
    },
    {
        "emoji":"🇵🇾",
        "meaning":"Paraguay flag",
        "unicode":"U+1F1F5 U+1F1FE"
    },
    {
        "emoji":"🇶🇦",
        "meaning":"Qatar flag",
        "unicode":"U+1F1F6 U+1F1E6"
    },
    {
        "emoji":"🇷🇪",
        "meaning":"Réunion flag",
        "unicode":"U+1F1F7 U+1F1EA"
    },
    {
        "emoji":"🇷🇴",
        "meaning":"Romania flag",
        "unicode":"U+1F1F7 U+1F1F4"
    },
    {
        "emoji":"🇷🇸",
        "meaning":"Serbia flag",
        "unicode":"U+1F1F7 U+1F1F8"
    },
    {
        "emoji":"🇷🇺",
        "meaning":"Russia flag",
        "unicode":"U+1F1F7 U+1F1FA"
    },
    {
        "emoji":"🇷🇼",
        "meaning":"Rwanda flag",
        "unicode":"U+1F1F7 U+1F1FC"
    },
    {
        "emoji":"🇸🇦",
        "meaning":"Saudi Arabia flag",
        "unicode":"U+1F1F8 U+1F1E6"
    },
    {
        "emoji":"🇸🇧",
        "meaning":"Solomon Islands flag",
        "unicode":"U+1F1F8 U+1F1E7"
    },
    {
        "emoji":"🇸🇨",
        "meaning":"Seychelles flag",
        "unicode":"U+1F1F8 U+1F1E8"
    },
    {
        "emoji":"🇸🇩",
        "meaning":"Sudan flag",
        "unicode":"U+1F1F8 U+1F1E9"
    },
    {
        "emoji":"🇸🇪",
        "meaning":"Sweden flag",
        "unicode":"U+1F1F8 U+1F1EA"
    },
    {
        "emoji":"🇸🇬",
        "meaning":"Singapore flag",
        "unicode":"U+1F1F8 U+1F1EC"
    },
    {
        "emoji":"🇸🇭",
        "meaning":"St. Helena flag",
        "unicode":"U+1F1F8 U+1F1ED"
    },
    {
        "emoji":"🇸🇮",
        "meaning":"Slovenia flag",
        "unicode":"U+1F1F8 U+1F1EE"
    },
    {
        "emoji":"🇸🇯",
        "meaning":"Svalbard & Jan Mayen flag",
        "unicode":"U+1F1F8 U+1F1EF"
    },
    {
        "emoji":"🇸🇰",
        "meaning":"Slovakia flag",
        "unicode":"U+1F1F8 U+1F1F0"
    },
    {
        "emoji":"🇸🇱",
        "meaning":"Sierra Leone flag",
        "unicode":"U+1F1F8 U+1F1F1"
    },
    {
        "emoji":"🇸🇲",
        "meaning":"San Marino flag",
        "unicode":"U+1F1F8 U+1F1F2"
    },
    {
        "emoji":"🇸🇳",
        "meaning":"Senegal flag",
        "unicode":"U+1F1F8 U+1F1F3"
    },
    {
        "emoji":"🇸🇴",
        "meaning":"Somalia flag",
        "unicode":"U+1F1F8 U+1F1F4"
    },
    {
        "emoji":"🇸🇷",
        "meaning":"Suriname flag",
        "unicode":"U+1F1F8 U+1F1F7"
    },
    {
        "emoji":"🇸🇸",
        "meaning":"South Sudan flag",
        "unicode":"U+1F1F8 U+1F1F8"
    },
    {
        "emoji":"🇸🇹",
        "meaning":"São Tomé & Príncipe flag",
        "unicode":"U+1F1F8 U+1F1F9"
    },
    {
        "emoji":"🇸🇻",
        "meaning":"El Salvador flag",
        "unicode":"U+1F1F8 U+1F1FB"
    },
    {
        "emoji":"🇸🇽",
        "meaning":"Saint Maarten flag",
        "unicode":"U+1F1F8 U+1F1FD"
    },
    {
        "emoji":"🇸🇾",
        "meaning":"Syria flag",
        "unicode":"U+1F1F8 U+1F1FE"
    },
    {
        "emoji":"🇸🇿",
        "meaning":"Eswatini flag",
        "unicode":"U+1F1F8 U+1F1FF"
    },
    {
        "emoji":"🇹🇦",
        "meaning":"Tristan da Cunha flag",
        "unicode":"U+1F1F9 U+1F1E6"
    },
    {
        "emoji":"🇹🇨",
        "meaning":"Turks & Caicos Islands flag",
        "unicode":"U+1F1F9 U+1F1E8"
    },
    {
        "emoji":"🇹🇩",
        "meaning":"Chad flag",
        "unicode":"U+1F1F9 U+1F1E9"
    },
    {
        "emoji":"🇹🇫",
        "meaning":"French Southern Territories flag",
        "unicode":"U+1F1F9 U+1F1EB"
    },
    {
        "emoji":"🇹🇬",
        "meaning":"Togo flag",
        "unicode":"U+1F1F9 U+1F1EC"
    },
    {
        "emoji":"🇹🇭",
        "meaning":"Thailand flag",
        "unicode":"U+1F1F9 U+1F1ED"
    },
    {
        "emoji":"🇹🇯",
        "meaning":"Tajikistan flag",
        "unicode":"U+1F1F9 U+1F1EF"
    },
    {
        "emoji":"🇹🇰",
        "meaning":"Tokelau flag",
        "unicode":"U+1F1F9 U+1F1F0"
    },
    {
        "emoji":"🇹🇱",
        "meaning":"Timor-Leste flag",
        "unicode":"U+1F1F9 U+1F1F1"
    },
    {
        "emoji":"🇹🇲",
        "meaning":"Turkmenistan flag",
        "unicode":"U+1F1F9 U+1F1F2"
    },
    {
        "emoji":"🇹🇳",
        "meaning":"Tunisia flag",
        "unicode":"U+1F1F9 U+1F1F3"
    },
    {
        "emoji":"🇹🇴",
        "meaning":"Tonga flag",
        "unicode":"U+1F1F9 U+1F1F4"
    },
    {
        "emoji":"🇹🇷",
        "meaning":"Turkey flag",
        "unicode":"U+1F1F9 U+1F1F7"
    },
    {
        "emoji":"🇹🇹",
        "meaning":"Trinidad & Tobago flag",
        "unicode":"U+1F1F9 U+1F1F9"
    },
    {
        "emoji":"🇹🇻",
        "meaning":"Tuvalu flag",
        "unicode":"U+1F1F9 U+1F1FB"
    },
    {
        "emoji":"🇹🇼",
        "meaning":"Taiwan flag",
        "unicode":"U+1F1F9 U+1F1FC"
    },
    {
        "emoji":"🇹🇿",
        "meaning":"Tanzania flag",
        "unicode":"U+1F1F9 U+1F1FF"
    },
    {
        "emoji":"🇺🇦",
        "meaning":"Ukraine flag",
        "unicode":"U+1F1FA U+1F1E6"
    },
    {
        "emoji":"🇺🇬",
        "meaning":"Uganda flag",
        "unicode":"U+1F1FA U+1F1EC"
    },
    {
        "emoji":"🇺🇲",
        "meaning":"U.S. Outlying Islands flag",
        "unicode":"U+1F1FA U+1F1F2"
    },
    {
        "emoji":"🇺🇳",
        "meaning":"United Nations flag",
        "unicode":"U+1F1FA U+1F1F3"
    },
    {
        "emoji":"🇺🇸",
        "meaning":"United States flag",
        "unicode":"U+1F1FA U+1F1F8"
    },
    {
        "emoji":"🇺🇾",
        "meaning":"Uruguay flag",
        "unicode":"U+1F1FA U+1F1FE"
    },
    {
        "emoji":"🇺🇿",
        "meaning":"Uzbekistan flag",
        "unicode":"U+1F1FA U+1F1FF"
    },
    {
        "emoji":"🇻🇦",
        "meaning":"Vatican City flag",
        "unicode":"U+1F1FB U+1F1E6"
    },
    {
        "emoji":"🇻🇨",
        "meaning":"St. Vincent & Grenadines flag",
        "unicode":"U+1F1FB U+1F1E8"
    },
    {
        "emoji":"🇻🇪",
        "meaning":"Venezuela flag",
        "unicode":"U+1F1FB U+1F1EA"
    },
    {
        "emoji":"🇻🇬",
        "meaning":"British Virgin Islands flag",
        "unicode":"U+1F1FB U+1F1EC"
    },
    {
        "emoji":"🇻🇮",
        "meaning":"U.S. Virgin Islands flag",
        "unicode":"U+1F1FB U+1F1EE"
    },
    {
        "emoji":"🇻🇳",
        "meaning":"Vietnam flag",
        "unicode":"U+1F1FB U+1F1F3"
    },
    {
        "emoji":"🇻🇺",
        "meaning":"Vanuatu flag",
        "unicode":"U+1F1FB U+1F1FA"
    },
    {
        "emoji":"🇼🇫",
        "meaning":"Wallis & Futuna flag",
        "unicode":"U+1F1FC U+1F1EB"
    },
    {
        "emoji":"🇼🇸",
        "meaning":"Samoa flag",
        "unicode":"U+1F1FC U+1F1F8"
    },
    {
        "emoji":"🇽🇰",
        "meaning":"Kosovo flag",
        "unicode":"U+1F1FD U+1F1F0"
    },
    {
        "emoji":"🇾🇪",
        "meaning":"Yemen flag",
        "unicode":"U+1F1FE U+1F1EA"
    },
    {
        "emoji":"🇾🇹",
        "meaning":"Mayotte flag",
        "unicode":"U+1F1FE U+1F1F9"
    },
    {
        "emoji":"🇿🇦",
        "meaning":"South Africa flag",
        "unicode":"U+1F1FF U+1F1E6"
    },
    {
        "emoji":"🇿🇲",
        "meaning":"Zambia flag",
        "unicode":"U+1F1FF U+1F1F2"
    },
    {
        "emoji":"🇿🇼",
        "meaning":"Zimbabwe flag",
        "unicode":"U+1F1FF U+1F1FC"
    },
    {
        "emoji":"🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "meaning":"England flag",
        "unicode":"U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F"
    },
    {
        "emoji":"🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "meaning":"Scotland flag",
        "unicode":"U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F"
    },
    {
        "emoji":"🏴󠁧󠁢󠁷󠁬󠁳󠁿",
        "meaning":"Wales flag",
        "unicode":"U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F"
    },
    /**something-else-something-else-something-else-something-else**/
    {
        "emoji":"🤡",
        "meaning":"Clown",
        "unicode":"U+1F921"
    },
    {
        "emoji":"👹",
        "meaning":"Ogre",
        "unicode":"U+1F479"
    },
    {
        "emoji":"👺",
        "meaning":"Goblin",
        "unicode":"U+1F47A"
    },
    {
        "emoji":"👻",
        "meaning":"Ghost",
        "unicode":"U+1F47B"
    },
    {
        "emoji":"👽",
        "meaning":"Alien",
        "unicode":"U+1F47D"
    },
    {
        "emoji":"👾",
        "meaning":"Alien monster",
        "unicode":"U+1F47E"
    },
    {
        "emoji":"🤖",
        "meaning":"Robot",
        "unicode":"U+1F916"
    },
    

    /***********************************************************************************************/
    
]

export default emojis;