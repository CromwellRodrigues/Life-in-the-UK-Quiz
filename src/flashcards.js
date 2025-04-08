const allFlashcards = [
  {
    id: 1,
    question: "Which flag has a diagonal red cross on a white ground?",
    answer:
      "The cross of St Patrick, patron saint of Ireland, is a diagonal red cross on a white ground.",
  },
  {
    id: 2,
    question: "Where is the city of Swansea located?",
    answer: "Swansea is located in Wales.",
  },
  {
    id: 3,
    question: "What is the national flower of Wales?",
    answer: "Daffodil",
  },
  {
    id: 4,
    question: "What is the national animal of Scotland?",
    answer: "Unicorn",
  },
  {
    id: 5,
    question: "Which of the following is a traditional English food?",
    answer: "Roast beef is a traditional English food.",
  },

  {
    id: 6,
    question:
      "Who were the first people to arrive in Britain in what we call the Stone Age?",
    answer: "Hunter-gatherers",
  },
  {
    id: 7,
    question:
      "When did Britain become permanently separated from the continent by the Channel?",
    answer: "10,000 years ago",
  },
  {
    id: 8,
    question:
      "The Commonwealth has no power over its members and it cannot suspend their membership: True or False?",
    answer:
      "True, The Commonwealth has no power over its members, although it can suspend membership. ",
  },

  {
    id: 9,
    question:
      "Black Death affected children and old people only. True or False?",
    answer:
      "In 1348, a disease, probably a form of plague, came to Britain. This was known as the Black Death. One third of the population of England died and a similar proportion in Scotland and Wales. This was one of the worst disasters ever to strike Britain. Following the Black Death, the smaller population meant there was less need to grow cereal crops. There were labour shortages and peasants began to demand higher wages.",
  },

  {
    id: 10,
    question:
      "Who was reigning in England when Wales became formally united with England by the Act for the Government of Wales?",
    answer:
      "During the reign of Henry VIII, Wales became formally united with England by the Act for the Government of Wales.",
  },

  {
    id: 11,
    question:
      "The Elizabethan period is known for the richness of its poetry and drama, especially for the plays and poems of which playwright?",
    answer:
      "The Elizabethan period is remembered for the richness of its poetry and drama, especially the plays and poems of William Shakespeare.",
  },

  {
    id: 12,
    question: "Fundamental principle of British life",
    answer:
      "The fundamental principles of British life include: tolerance of those with different faiths and beliefs, the rule of law, democracy, individual liberty and participation in community life.",
  },
  {
    id: 13,
    question: "Name two environmental charities",
    answer:
      "The National Trust and Friends of the Earth are environmental charities.",
  },
  {
    id: 14,
    question:
      "Which British sportsman won five consecutive gold medals at the Olympic Games in the rowing category?",
    answer:
      "Sir Steve Redgrave won gold medals in rowing in five consecutive Olympic Games and is one of Britain’s greatest Olympians.",
  },
  {
    id: 15,
    question:
      "What is the name of the centrepiece to the Remembrance Day service located in Whitehall, London?",
    answer:
      "The Cenotaph in Whitehall is the site of the annual Remembrance Day service attended by the King, politicians and foreign ambassadors.",
  },
  {
    id: 16,
    question: "Who was the inventor of the World Wide Web?",
    answer:
      "The inventor of the World Wide Web, Sir Tim Berners-Lee (1955-), is British. Information was successfully transferred via the web for the first time on 25 December 1990.",
  },
  {
    id: 17,
    question: "When did the Wars of the Roses start?",
    answer:
      "In 1455, a civil war was begun to decide who should be king of England. It was fought between the supporters of two families: the House of Lancaster and the House of York. This war was called the Wars of the Roses, because the symbol of Lancaster was a red rose and the symbol of York was a white rose.",
  },
  {
    id: 18,
    question: "How many members does the Scottish Parliament have?",
    answer:
      "There are 129 members of the Scottish Parliament (MSPs), elected by a form of proportional representation. Elected members of the Scottish Parliament are known as Members of the Scottish Parliament (MSPs).",
  },

  {
    id: 19,
    question: "What does the term ‘coalition’ refer to?",
    answer:
      "The government is usually formed by the party that wins the majority of constituencies. If no party wins a majority, two parties may join together to form a coalition.",
  },
  {
    id: 20,
    question:
      "The public can listen to debates in the Palace of Westminster from public galleries in both the House of Commons and the House of Lords. True or False?",
    answer: "This statement is true.",
  },
  {
    id: 21,
    question: "Pool and darts are traditional pub games. True or False?",
    answer: "True, Pool and darts are traditional pub games.",
  },
  {
    id: 22,
    question: "When did the UK formally leave the European Union?",
    answer: "The UK formally left the European Union on 31 January 2020.",
  },
  {
    id: 23,
    question:
      "What is the minimum age requirement in the UK to drink wine or beer with a meal provided you are with someone over 18?",
    answer:
      "When they are 16, people can drink wine or beer with a meal in a hotel or restaurant (including eating areas in pubs) as long as they are with someone over 18.",
  },
  {
    id: 24,
    question: "Who is the spiritual leader of the Church of England?",
    answer:
      "The spiritual leader of  the Church of England is the Archbishop of Canterbury.",
  },
  {
    id: "25",
    question: "Civil servants cannot stand for public office: True or False?",
    answer:
      "Most citizens of the UK, Ireland or the Commonwealth aged 18 or over can stand for public office. There are some exceptions, including: members of the armed forces, civil servants, people found guilty of certain criminal offences.",
  },
  {
    id: 26,
    question: "Which Scottish city is known as the home of golf?",
    answer: "St. Andrews in Scotland is known as the home of golf.",
  },
  {
    id: 27,
    question:
      "Which court deals with the most serious cases of children aged 10 to 17 in England, Wales and Northern Ireland?",
    answer:
      "In England, Wales and Northern Ireland, if an accused person is aged 10 to 17, the case is normally heard in a Youth Court in front of up to three specially trained magistrates or a District Judge. The most serious cases will go the Crown Court.",
  },
  {
    id: "28",
    question:
      "What is the name of the best preserved prehistoric village in northern Europe and which origin traces back to the Stone Age?",
    answer:
      "Skara Brae on Orkney, off the north coast of Scotland, is the best preserved prehistoric village in northern Europe, and has helped archaeologists to understand more about how people lived near the end of the Stone Age.",
  },
  {
    id: "29",
    question: "When was the National Trust founded?",
    answer: "The National Trust was founded in 1895 by three volunteers.",
  },
  {
    id: "30",
    question:
      "After the Black Death, new social classes appeared in England, including owners of large areas of land known as:",

    answer:
      "Following the Black Death, the smaller population meant there was less need to grow cereal crops. There were labour shortages and peasants began to demand higher wages. New social classes appeared, including owners of large areas of land (later called the gentry), and people left the countryside to live in the towns. In the towns, growing wealth led to the development of a strong middle class.",
  },

  {
    id: "31",
    question: "Elizabeth I was the younger daughter of which King?",
    answer: "Elizabeth I was the younger daughter of Henry VIII.",
  },
  {
    id: "32",
    question:
      "Which of the following operas was written by Gilbert and Sullivan?",
    answer:
      "In the 19th century, Gilbert and Sullivan wrote comic operas, often making fun of popular culture and politics. These operas include HMS Pinafore, The Pirates of Penzance and The Mikado.",
  },
  {
    id: "33",
    question: "Where is Loch Lomond and the Trossachs National Park located?",
    answer:
      "Loch Lomond and the Trossachs National Park is located in the west of Scotland.",
  },
  {
    id: "34",
    question: "Who is married to the King of the United Kingdom?",
    answer:
      "The King of the United Kingdom is married to Camila, the Queen Consort.",
  },
  {
    id: "35",
    question: "By what TWO other names is the Church of England known?",
    answer:
      "The official Church of the state is the Church of England (called the Anglican Church in other countries and the Episcopal Church in Scotland and the United States).",
  },
  {
    id: "36",
    question: "Who was the first British Prime Minister?",
    answer:
      "The first man to British Prime Minister was Sir Robert Walpole, who was Prime Minister from 1721 to 1742.",
  },
  {
    id: "37",
    question: "What day does Lent start?",
    answer: "Lent begins on Ash Wednesday.",
  },

  {
    id: "38",
    question: "How old do you need to be to apply for a free TV licence? ",
    answer:
      "People over 75 can apply for a free TV licence and blind people can get a 50% discount.",
  },

  {
    id: "39",
    question: "What time do pubs usually open on Sundays in the UK?",
    answer:
      "Pubs are usually open during the day from 11.00 am (12 noon on Sundays).",
  },

  {
    id: "40",
    question: "What is the official home of the Prime Minister?",
    answer:
      "The official home of the Prime Minister is 10 Downing Street, in central London, near the Houses of Parliament. He or she also has a country house outside London called Chequers.",
  },

  {
    id: "41",
    question:
      "When did the Conservative government called a referendum on the UK’s membership of the European Union?",
    answer:
      "The Conservative government called a referendum on the UK’s membership of the European Union on the 23rd June 2016.",
  },
  {
    id: "42",
    question:
      "Which British sportswoman won two gold medals for running in the 2004 Olympic Games?",
    answer:
      "Dame Kelly Holmes won two gold medals for running in the 2004 Olympic Games. She has held a number of British and European records. ",
  },

  {
    id: "43",
    question:
      "What percentage of the total British population is located in England alone?",
    answer:
      "The population is very unequally distributed over the four parts of the UK. England more or less consistently makes up 84% of the total population, Wales around 5%, Scotland just over 8%, and Northern Ireland less than 3%.",
  },
  {
    id: "44",
    question: "What was the population of the UK in 2010?",
    answer: "The population of the UK in 2010 was just over 62 million people.",
  },
  {
    id: "45",
    question:
      "Which court deals with cases involving personal injury, family matters, breaches of contract and divorce in England and Wales?",
    answer:
      "County Courts deal with a wide range of civil disputes. These include people trying to get back money that is owed to them, cases involving personal injury, family matters, breaches of contract, and divorce. In Scotland, most of these matters are dealt with in the Sheriff Court.",
  },
  {
    id: "46",
    question:
      "What is the name of the building where the Scottish Parliament meet?",
    answer:
      "In Scotland the elected members, called MSPs, meet in the Scottish Parliament building at Holyrood in Edinburgh.",
  },
  {
    id: "47",
    question: "Which flower is associated with England?",
    answer: "The rose is the flower associated with England.",
  },
  {
    id: "48",
    question: "Who was Robert Burns?",
    answer:
      "Known in Scotland as ‘The Bard’, Robert Burns was a Scottish poet.",
  },
  {
    id: "49",
    question: "In which period did British Film studios flourish?",
    answer: "British film studios flourished in the 1930s.",
  },

  {
    id: "50",
    question: "What is the capital city of Northern Ireland?",
    answer: "The capital city of Northern Ireland is Belfast.",
  },
  {
    id: "51",
    question:
      "What name is given to the day when people play jokes on each other until midday?",
    answer:
      "April Fool’s Day, 1 April, is a day when people play jokes on each other until midday. The television and newspapers often have stories that are April Fool jokes.",
  },
  {
    id: "52",
    question:
      "Who is the fastest person to have sailed around the world single-handed?",
    answer:
      "Dame Ellen MacArthur(1976-) is a yachtswoman and in 2004 became the fastest person to sail around the world singlehanded.",
  },

  {
    id: "53",
    question: "When did the First World War end?",
    answer: "When did the First World War end?",
  },
  {
    id: "54",
    question: "What are Welsh cakes made of?",
    answer:
      "Welsh cakes are a traditional Welsh snack made from flour, dried fruits and spices, and served either hot or cold.",
  },
  {
    id: "55",
    question: "Where is the London Eye situated?",
    answer:
      "The London Eye is situated on the southern bank of the River Thames and is a Ferris wheel that is 443 feet (135 metres) tall.",
  },
  {
    id: "56",
    question:
      "What is the relationship between the monarch and the government?",
    answer:
      "The monarch has regular meetings with the Prime Minister and can advise, warn and encourage, but the decisions on government policies are made by the Prime Minister and cabinet.",
  },

  {
    id: "57",
    question: "The UK is a ‘constitutional monarchy’: True or False?",
    answer: "The UK has a constitutional monarchy.",
  },

  {
    id: "58",
    question:
      "What do you need to apply to become a permanent resident or citizen of the UK (naturalisation)?",
    answer:
      "To apply to become a permanent resident or citizen of the UK, you will need to speak and read English and have a good understanding of life in the UK.",
  },

  {
    id: "59",
    question:
      "Which British scientist was awarded a Nobel Prize for discovering the structure of the DNA molecule?   ",
    answer:
      "The structure of the DNA molecule was discovered in 1953 through work at British universities in London and Cambridge. This discovery contributed to many scientific advances, particularly in medicine and fighting crime. Francis Crick (1916-2004), one of those awarded the Nobel Prize for this discovery, was British.",
  },
  {
    id: "60",
    question: "Who established the Church of England?",
    answer:
      "To divorce his first wife, Henry VIII needed the approval of the Pope. When the Pope refused, Henry established the Church of England. In this new church, the king, not the Pope, would have the power to appoint bishops and order how people should worship.",
  },

  {
    id: "61",
    question: "Is this national gallery 'National Museum' located in London?",
    answer:
      "The National Museum is located in Cardiff, Wales. In the UK, some of the most well-known galleries are The National Gallery, Tate Britain and Tate Modern in London, the National Museum in Cardiff, and the National Gallery of Scotland in Edinburgh.",
  },

  {
    id: "62",
    question:
      "How much can you be fined if you watch TV but do not have a TV licence?",
    answer:
      "You will receive a fine up to £1,000 if you watch TV but do not have a TV licence.",
  },
  {
    id: "63",
    question:
      "How old is the clock at the Houses of Parliament in London, also known as ‘Big Ben’?",
    answer:
      "Big Ben is the nickname for the great bell of the clock at the House of Parliament in London. The clock is over 150 years old and is a popular tourist attraction.",
  },
  {
    id: "64",
    question:
      "The UK was a full member of the European Union but did not use the Euro currency. True or False?",
    answer: "True",
  },
  {
    id: "65",
    question:
      "The North Atlantic Treaty Organisation is a group of European and North American countries that was created with which TWO purposes:",
    answer:
      "NATO is a group of European and North American countries that have agreed to help each other if they come under attack. It also aims to maintain peace between all of its members.",
  },

  {
    id: "66",
    question:
      "The small claims procedure is used in England and Wales for minor disputes for:",
    answer:
      "This procedure is used for claims of less than £10,000 in England and Wales and £3,000 in Scotland and Northern Ireland.",
  },
  {
    id: "67",
    question:
      "What name is given to the period in the 18th century when new ideas about politics, philosophy and science were developed?",
    answer:
      "During the 18th century, new ideas about politics, philosophy and science were developed. This is often called ‘the Enlightenment’.",
  },

  {
    id: "68",
    question: "What is the meaning of ‘Magna Carta’?",
    answer:
      "The Magna Carta (which means the Great Charter). The Magna Carta established the idea that even the king was subject to the law. It protected the rights of the nobility and restricted the king’s power to collect taxes or to make and change laws.",
  },

  {
    id: "69",
    question: "When did the Wars of the Roses end?",
    answer:
      "The Wars of the Roses ended with the Battle of Bosworth Field in 1485.",
  },
  {
    id: "70",
    question:
      "Which of the following is the responsibility of the Chancellor of the Exchequer?",
    answer: "The Chancellor of the Exchequer is responsible for the economy.",
  },
  {
    id: "71",
    question: "In which British university did Isaac Newton study?",
    answer: "Isaac Newton studied at Cambridge University.",
  },
  {
    id: "72",
    question: "Who invaded England after the Romans?",
    answer:
      "The Roman army left Britain in AD 410 to defend other parts of the Roman Empire and never returned. Britain was again invaded by tribes from northern Europe: the Jutes, the Angles and the Saxons.",
  },
  {
    id: "73",
    question: "When did people learn to make bronze?",
    answer:
      "Around 4,000 years ago, people learned to make bronze. We call this period the Bronze Age.",
  },

  {
    id: "74",
    question:
      "When is the Jewish celebration known as Hanukkah normally celebrated?",
    answer:
      "Hanukkah is in November or December and is celebrated for eight days.",
  },

  {
    id: "75",
    question: "What musical award is given during the Mercury Music Prize?",
    answer:
      "The Mercury Music Prize is awarded each September for the best album from the UK and Ireland.",
  },
  {
    id: "76",
    question: "Who was Boudicca?",
    answer:
      "One of the tribal leaders who fought against the Romans was Boudicca, the queen of the Iceni in what is now eastern England.",
  },

  {
    id: "77",
    question: "Two popular water sports in the UK are:",
    answer:
      "Sailing continues to be popular in the UK, reflecting its maritime heritage. Rowing is also popular, both as a leisure activity and as a competitive sport.",
  },
  {
    id: "78",
    question:
      "Forcing another person to marry is a criminal offence: True or False?",
    answer: "Forcing another person to marry is a criminal offence.",
  },
  {
    id: "79",
    question: "In the UK, what should dogs wear in public places?",
    answer:
      "All dogs in public places must wear a collar showing the name and address of the owner.",
  },
  {
    id: "80",
    question: "Where do UK residents need to register their car or motorcycle?",
    answer:
      "If you are resident in the UK, your car or motor cycle must be registered at the Driver and Vehicle Licensing Agency (DVLA).",
  },
  {
    id: "81",
    question: "Popular social networking websites in the UK include:",
    answer:
      "Social networking websites such as Facebook and Twitter are a popular in the UK.",
  },
  {
    id: "82",
    question:
      "According to the 2011 Census, what percentage of the population identified themselves as Muslim?",
    answer:
      "In the 2011 Census, 59% of people identified themselves as Christian. Much smaller proportions identified themselves as Muslim (4.8%), Hindu (1.5%), Sikh (0.8%), Jewish or Buddhist (both less than 0.5%).",
  },
  {
    id: "83",
    question: "How often are elections held for the Welsh government?",
    answer:
      "In Wales the elected members are known as SMs or Senedd Members, meet at the Senedd in Cardiff Bay. The Welsh government has 60 Senedd members (SMs) and elections are held every four years using a form of proportional representation. The Senedd has the power to make laws in 21 areas, including: education and training, health and social services, economic development and housing.",
  },
  {
    id: "84",
    question: "Who was the British Minister after Margaret Thatcher?",
    answer:
      "John Major was Prime Minister after Mrs Thatcher, and helped establish the Northern Ireland peace process. ",
  },
  {
    id: "85",
    question:
      "What name is given to the person appointed by local authorities to be the ceremonial leader of a particular council?",
    answer:
      "Many local authorities appoint a mayor, who is the ceremonial leader of the council. In some towns, a mayor is elected to be the effective leader of the administration.",
  },
  {
    id: "86",
    question: "What is the meaning of the term ‘first past the post’?",
    answer:
      "MPs are elected through a system called ‘first past the post’. In each constituency, the candidate who gets the most votes is elected.",
  },
  {
    id: "87",
    question:
      "Who defeated Emperor Napoleon at the Battle of Waterloo in 1815?",
    answer:
      "In 1815, the French Wars ended with the defeat of the Emperor Napoleon by the Duke of Wellington at the Battle of Waterloo.",
  },
  {
    id: "88",
    question:
      "Which court deals with the MOST serious cases in Scotland, such as murder?",
    answer:
      "In Scotland, serious cases are heard in a Sheriff Court with either a sheriff or a sheriff with a jury. The most serious cases in Scotland, such as murder, are heard at a High Court with a judge and jury.",
  },
  {
    id: "89",
    question: "What was the symbol of the House of Tudor?",
    answer:
      "The symbol of the House of Tudor was a red rose with a white rose inside it as a sign that the Houses of York and Lancaster were now allies.",
  },
  {
    id: "90",
    question: "What animal is represented in the Welsh flag?",
    answer:
      "There is also an official Welsh flag, which shows a Welsh dragon. The Welsh dragon does not appear on the Union Flag because, when the first Union Flag was created in 1606 from the flags of Scotland and England, the Principality of Wales was already untied with England.",
  },
  {
    id: "91",
    question:
      "Which famous economist developed ideas about economics during the 18th century and which are still referred to today?",
    answer:
      "During the 18th century, new ideas about politics, philosophy and science were developed. This is often called ‘the Enlightenment’. Many of the great thinkers of the Enlightenment were Scottish. Adam Smith developed ideas about economics which are still referred to today.",
  },
  {
    id: "92",
    question: "Who is the ceremonial head of the Commonwealth?",
    answer: "The King is the ceremonial head of the Commonwealth.",
  },
  {
    id: "93",
    question:
      "Which TWO movie categories does Britain continue to be particularly strong at?",
    answer:
      "Britain continues to be particularly strong in special effects and animation movies.",
  },
  {
    id: "94",
    question:
      "Which British artist was a portrait painter who often painted people in country or garden scenarios?",
    answer:
      "Thomas Gainsborough (1727-88) was a portrait painter who often painted people in country or garden scenery.",
  },
  {
    id: "95",
    question:
      "During which religious celebration do Muslims sacrifice an animal to eat?",
    answer: "Many Muslims sacrifice an animal to eat during Eid ul Adha.",
  },
  {
    id: "96",
    question:
      "How old do you need to be to be able to play the National Lottery?",
    answer:
      "People under 18 are not allowed to participate in the National Lottery.",
  },
  {
    id: "97",
    question:
      "Where is the five-day race meeting attended by members of the Royal Family and known as Royal Ascot celebrated?",
    answer:
      "Royal Ascot, the five-day race meeting attended by members of the Royal Family, takes place in Berkshire.",
  },
  {
    id: "98",
    question:
      "Who was the first person to lead a Roman invasion in Britain in 55 BC?",
    answer: "Julius Caesar led a Roman invasion of Britain in 55 BC.",
  },
  {
    id: "99",
    question: "Who wrote ‘The Lord of the Rings’? ",
    answer: "The Lord of the Rings was written by JRR Tolkien.",
  },
  {
    id: "100",
    question:
      "Which court deals with minor criminal cases in England, Wales and Northern Ireland?    ",
    answer:
      "In England, Wales and Northern Ireland, most minor criminal cases are dealt with in a Magistrates’ Court. In Scotland, minor criminal offences go to a Justice of the Peace Court.",
  },
  {
    id: "101",
    question:
      "What name is given to the tombs where people buried their dead during the Bronze Age?",
    answer:
      "During the Bronze Age people lived in roundhouses and buried their dead in tombs called round barrows.",
  },

  {
    id: "102",
    question: "The Northern Ireland Assembly cannot make decisions on:",
    answer:
      "The Northern Ireland Assembly can make decisions on issues such as education, agriculture, the environment, health and social services. It cannot make decisions on defence.",
  },

  {
    id: "103",
    question:
      "According to the 2011 Census, what percentage of the population identified themselves as Buddhist?",
    answer:
      "In the 2011 Census, 59% of people identified themselves as Christian. Much smaller proportions identified themselves as Muslim (4.8%), Hindu (1.5%), Sikh (0.8%), Jewish or Buddhist (both less than 0.5%).",
  },
  {
    id: "104",
    question:
      "In which category did Jayne Torvill and Christopher Dean win gold medals at the Olympic Games in 1984?",
    answer:
      "Jayne Torvill and Christopher Dean won gold medals for ice dancing at the Olympic Games in 1984 and is one of Britain’s greatest Olympians.",
  },
  {
    id: "105",
    question:
      "What is the first verse of the National Anthem of the UK ‘God save the King’?",
    answer:
      "The first verse of the National Anthem of the UK is ‘God save our gracious King!.",
  },
  {
    id: "106",
    question: "Radioactivity is not a British invention: True or False?",
    answer: "Radioactivity is not a British invention",
  },
  {
    id: "107",
    question:
      "Which British Prime Minister was famous for the speech ‘I have nothing to offer but blood, toil, tears and sweat’?",
    answer:
      "During the Second World War, Winston Churchill made many famous speeches including lines which you may still hear: ‘I have nothing to offer but blood, toil, tears and sweat’. This was Churchill’s first speech to the House of Commons after he became Prime Minister, 1940.",
  },
  {
    id: "108",
    question:
      " Which of the following countries did NOT belong to the Allies during World War I - France, Bulgaria, The UK, Australia ?",
    answer:
      "Bulgaria was not part of the Allies during the First World War. Bulgaria formed part of the Central Powers during the First World War.",
  },
  {
    id: "109",
    question: "Two charities that work with homeless people?",
    answer:
      "Charities that work with homeless people include Crisis and Shelter.",
  },
  {
    id: "110",
    question: "Which flower is associated with Scotland?",
    answer: "The thistle is the flower associated with Scotland.",
  },
  {
    id: "111",
    question: "What is the money from TV licences used for?",
    answer:
      "This is a public service broadcaster providing television and radio programmes. The BBC is the largest broadcaster in the world. It is the only wholly state-funded media organisation that is independent of government.",
  },
  {
    id: "112",
    question:
      "Members of the Welsh government are elected every four years on the basis of:",
    answer:
      "The Welsh government and the Senedd are based in Cardiff, the capital city of Wales. There are 60 members of the Senedd (SMs) and elections are held every four years using a form of proportional representation.",
  },

  {
    id: "113",
    question: "What is the Commonwealth?",
    answer:
      "An association of countries that support each other and work together towards shared goals in democracy and development",
  },
  {
    id: "114",
    question:
      "Which famous architect designed St Paul’s Cathedral after it was destroyed by a fire in 1666?",
    answer:
      "In 1666, a great fire destroyed much of the city of London, including many churches and St Paul’s Cathedral. London was rebuilt with a new St Paul’s, which was designed by a famous architect, Sir Christopher Wren.",
  },
  {
    id: "115",
    question:
      "Which of the following countries belongs to the Commonwealth? - Morocco, Algeria, Mozambique, Mali",
    answer: "Mozambique.",
  },
  {
    id: "116",
    question: "Who has to pay national insurance contributions in the UK?",
    answer:
      "Almost everybody in the UK who is in paid work, including self-employed people, must pay National Insurance Contributions.",
  },
  {
    id: "117",
    question:
      "Where is the centrepiece to the Remembrance Day service known as Cenotaph located?",
    answer:
      "The Cenotaph, the Centrepiece to the Remembrance Day service, is located in Whitehall, London.",
  },
  {
    id: "118",
    question:
      " Which of the following territories does not belong to Great Britain? - England, Wales, Northern Ireland, England",
    answer:
      "‘Great Britain’ refers only to England, Scotland and Wales, not to Northern Ireland. The official name of the country is the United Kingdom of Great Britain and Northern Ireland.",
  },
  {
    id: "119",
    question: "Who was the first Briton to win the ‘Tour de France’?",
    answer:
      "Bradley Wiggins became the first Briton to win the ‘Tour de France’.",
  },
  {
    id: "120",
    question:
      "The English language has many accents and dialects. True or False?",
    answer:
      "The English language has many accents and dialects, which are often associated with particular regions of the UK.",
  },
  {
    id: "121",
    question:
      "What do Ian McEwan, Hilary Mantel and Julian Barnes have in common?",
    answer:
      "The Man Booker Prize for Fiction is awarded annually for the best fiction novel written by an author from the Commonwealth, Ireland or Zimbabwe. It has been awarded since 1968. Past winners include Ian McEwan, Hilary Mantel and Julian Barnes.",
  },
  {
    id: "122",
    question:
      "In Northern Ireland members of the Legislative Assembly are elected on the basis of:",
    answer:
      "The Northern Ireland Assembly has 90 elected members, known as MLAs (members of the Legislative Assembly). They are elected with a form of proportional representation.",
  },
  {
    id: "123",
    question: "How can MPs be contacted?",
    answer:
      "You can contact MPs by letter or telephone at their constituency office, or at their office in the House of Commons: The House of Commons, Westminster, London SW1A OAA, telephone 0207729 3000.",
  },

  {
    id: "124",
    question: " What did the’Bill of Rights’ confirm in 1689?",
    answer:
      "The Bill of Rights, 1689, confirmed the rights of Parliament and the limits of the king’s power. Parliament took control of who could be monarch and declared that the king or queen must be a Protestant.",
  },
  {
    id: "125",
    question:
      "Who designed the Clifton Suspension Bridge located over the Avon George?",
    answer:
      "The Clifton Suspension Bridge was designed by Isambard Kingdom Brunel. It was built between 1830 and 1864 and is one of the most famous landmarks in Bristol. It is a suspension bridge over the Avon George.",
  },
  {
    id: "126",
    question: "Does Britain have a written constitution?",
    answer:
      "The British constitution is not written down in any single document, and therefore it is described as ‘unwritten’.This is mainly because the UK, unlike America or France, has never had a revolution which led permanently to a totally new system of government.",
  },

  {
    id: "127",
    question:
      "What was the estimated population of the British Empire during the Victorian period?",
    answer:
      "During the Victorian period, the British Empire grew to cover all of India, Australia and large parts of Africa. It became the largest empire the world has ever seen, with an estimated population of more than 400 million people.",
  },

  {
    id: "128",
    question: "How many times have the Olympic Games been hosted in the UK?",
    answer:
      "The UK has hosted the Olympic games on three occasions: 1908, 1948 and 2012.",
  },

  {
    id: "129",
    question: "When were films first shown publicly in the UK? ",
    answer:
      "Films were first shown publicly in the UK in 1896 and film screenings very quickly became popular.",
  },

  {
    id: "130",
    question:
      "What is the name of the building where the Welsh government members meet?",
    answer:
      "Elected members of the Welsh government meet at the Senedd in Cardiff, the capital city of Wales.",
  },
  {
    id: "131",
    question: "Where is the city of Southampton located?",
    answer: "Southampton is located in England.",
  },

  {
    id: "132",
    question: "Florence Nightingale was known for her work on:",
    answer:
      "Florence Nightingale is often regarded as the founder of modern nursing.",
  },

  {
    id: "133",
    question:
      "Which Act abolished slavery throughout the British Empire in 1833?",
    answer:
      "In 1833 the Emancipation Act abolished slavery throughout the British Empire. The Royal Navy stopped slave ships from other countries, freed the slaves and punished the slave traders.",
  },

  {
    id: "134",
    question: "Who became King of Britain when Queen Anne died in 1714?",
    answer:
      "When Queen Anne died in 1714, Parliament chose a German, George I, to be the next king, because he was Anne’s nearest Protestant relative.",
  },
  {
    id: "135",
    question: "What was the population of the UK in 2005?",
    answer:
      "The population of the UK in 2005 was just under 60 million people.",
  },
  {
    id: "136",
    question: "When did the ‘Habeas Corpus Act’ become law?",
    answer:
      "The Habeas Corpus Act became law in 1679. It is a law that protects people from being imprisoned without trial.",
  },
  {
    id: "137",
    question: "Who discovered the penicillin in 1928?",
    answer:
      "Alexander Fleming was researching influenza (the ‘flu’) in 1928 when he discovered penicillin.",
  },
  {
    id: "138",
    question:
      "During the Middle Ages, England was an important trading nation and people came to England from abroad to trade and also to work. Where did glass manufacturers come from?",
    answer:
      "During the Middle Ages people came to England from abroad to trade and also to work, such as weavers from France, engineers from Germany, glass manufacturers from Italy and canal builders from Holland.",
  },

  {
    id: "139",
    question: "Where can people facing domestic violence get help from? ",
    answer:
      "People facing domestic violence can get help from a solicitor or the Citizens Advice Bureau. ",
  },

  {
    id: "140",
    question:
      "Which American President worked closely with Margaret Thatcher? ",
    answer:
      "Margaret Thatcher worked closely with the United States President, Ronald Reagan, and was one of the first Western leaders to recognise and welcome the changes in the leadership of the Soviet Union which eventually led to the end of the Cold War. ",
  },

  {
    id: "141",
    question:
      "People might be taken to court if they owe money to someone. True or False?",
    answer: "This statement is true. ",
  },

  {
    id: "142",
    question: " Who was the first Archbishop of Canterbury?",
    answer:
      " St Augustine led missionaries from Rome, who spread Christianity in the south. St Augustine became the first Archbishop of Canterbury.",
  },

  {
    id: "143",
    question:
      "How many members does a jury have in England, Wales and Northern Ireland? ",
    answer:
      "In England, Wales and Northern Ireland a jury has 12 members, and in Scotland a jury has 15 members. ",
  },

  {
    id: "144",
    question: "What is tested with a driving test ? ",
    answer:
      "To get a UK driving licence you must pass a driving test, which tests both your knowledge and your practical skills. ",
  },

  {
    id: "145",
    question: "What is the role of the Speaker? ",
    answer:
      " The Speaker keeps order during political debates to make sure the rules are followed.",
  },

  {
    id: "146",
    question: " Youth Courts ",
    answer: "They are used for trials of young people aged 10 to 17.",
  },

  {
    id: "147",
    question: "Films were directed by David Lean? ",
    answer:
      "David Lean directed Brief Encounter (1945) and Lawrence of Arabia (1962). ",
  },

  {
    id: "148",
    question:
      "Which of the following venues is located in Glasgow? The O2, Wembley Stadium, The SEC Centre, Buckingham Palace",
    answer:
      " The Scottish Exhibition and Conference Centre (SEC Centre) is located in Glasgow.",
  },

  {
    id: "149",
    question:
      "How many British casualties were recorded during the first day of the British attack of the Somme in July 1916 during the First World War?",
    answer:
      "The British attack of the Somme in July 1916, resulted in about 60,000 British casualties on the first day alone. During the First World War millions of people were killed or wounded, with more than 2 million British casualties.",
  },

  {
    id: "150",
    question:
      "The Welsh dragon on the Welsh flag does not appear on the Union Flag because, when the first Union Flag was created in 1606 from the flags of Scotland and England, the Principality of Wales was already untied with England: ",
    answer: "This statement is true. ",
  },

  {
    id: "151",
    question: " Which two countries developed the ‘Concorde’ aircraft?",
    answer:
      "Britain and France developed the world’s only supersonic commercial airliner, Concorde.The ‘Concorde’, the world’s only supersonic passenger aircraft, first flew in 1969. ",
  },

  {
    id: "152",
    question: " What was the population of the UK in 1801?",
    answer: "The population of the UK in 1801 was 8 million people. ",
  },

  {
    id: "153",
    question: "Where is there UK geographically located",
    answer: "The UK is located in the north west of Europe.",
  },

  {
    id: "154",
    question: "What is the main function of the Council of Europe?",
    answer:
      "The Council of Europe is responsible for the protection and promotion of human rights in its member countries.",
  },

  {
    id: "155",
    question: "Sir Alfred Hitchcock was an important British film director",
    answer:
      "Eminent directors included Sir Alexander Korda and Sir Alfred Hitchcock, who later left for Hollywood and remained an important film director until his death in 1980. ",
  },

  {
    id: "156",
    question:
      "Which Scottish physician and researcher co-discovered the insulin used to treat diabetes? ",
    answer:
      "The Scottish physician and researcher John Macleod was the co-discoverer of insulin, used to treat diabetes. ",
  },

  {
    id: "157",
    question: "Who was voted the greatest Briton of all time in 2002? ",
    answer:
      "Winston Churchill in 2002 was voted the greatest Briton of all time by the public. ",
  },

  {
    id: "158",
    question: "When is St George’s Day, patron of England? ",
    answer:
      "St George’s Day, patron of England is celebrated on the 23rd of April. ",
  },

  {
    id: "159",
    question:
      "Which TWO  social laws were liberalised during the ‘Swinging Sixties’? ",
    answer:
      "The law of abortion and the law of divorce were liberalised during the ‘Swinging Sixties’. ",
  },

  {
    id: "160",
    question: "Who was the mother of Elizabeth I? ",
    answer: "Anne Boleyn and Henry VIII had one daughter, Elizabeth I. ",
  },

  {
    id: "161",
    question: "Who was the first wife of Henry VIII?",
    answer: "Catherine of Aragon was the first wife of Henry VIII.",
  },
  {
    id: "162",
    question:
      "Which of the following flags is not represented in the union flag?",
    answer:
      "The Welsh flag does not appear on the Union Flag because, when the first Union Flag was created in 1606 from the flags of Scotland and England, the Principality of Wales was already untied with England.",
  },
  {
    id: "163",
    question: "When does the Edinburgh Festival take place?",
    answer:
      "The Edinburgh Festival takes place in Edinburgh, Scotland, every summer.",
  },
  {
    id: "164",
    question: "By which other name is the Conservative Party also known as?",
    answer:
      "The modern Conservative Party is still sometimes referred to as ‘The Tories’.",
  },
  {
    id: "165",
    question:
      "When was the Northern Ireland Parliament established for the first time?",
    answer: "The Northern Ireland Parliament was first established in 1922.",
  },
  {
    id: "166",
    question: "What is the opposition?",
    answer:
      "The second-largest party in the House of Commons is called the opposition.",
  },
  {
    id: "167",
    question:
      "Which two languages combined form the basis of the English language?",
    answer:
      "After the Norman Conquest, the king and his noblemen had spoken Norman French and the peasants had continued to speak Anglo-Saxon. Gradually these two languages combined to become one English language.",
  },
  {
    id: "168",
    question: "The main parts of the British government?",
    answer:
      "In the UK, there are several different parts of government. The main ones are: the monarchy, the Parliament (the House of Commons and the House of Lords), the Prime Minister, the cabinet, the judiciary (courts), the police, the civil service and the local government.",
  },
  {
    id: "169",
    question: "When did Adolf Hitler come to power in Germany?",
    answer: "Adolf Hitler came to power in Germany in 1933.",
  },
  {
    id: "170",
    question: "Who invented the hovercraft?",
    answer:
      "Sir Christopher Cockerell (1910-99), a British inventor, invented the hovercraft in the 1950s.",
  },
  {
    id: "171",
    question: "Which court deals with serious criminal offences in Wales?",
    answer:
      "In England, Wales and Northern Ireland, serious criminal offences are tried in front of a judge and a jury in a Crown Court. In Scotland, serious cases are heard in a Sheriff Court with either a sheriff or a sheriff with a jury.",
  },
  {
    id: "172",
    question: "What is the coin with the highest value in the UK?",
    answer: "The coin with the highest value in the UK is the £2 coin.",
  },
  {
    id: "173",
    question:
      "When were Protection Orders to protect a person from being forced into a marriage introduced in Scotland?",
    answer:
      "Forced Marriage Protection Orders were introduced in 2008 for England, Wales and Northern Ireland under the Forced Marriage (Civil Protection) Act 2007. Court orders can be obtained to protect a person from being forced into a marriage, or to protect a person in a forced marriage. Similar Protection Orders were introduced in Scotland in November 2011.",
  },
  {
    id: "174",
    question: "Famous horse racing events in the UK?",
    answer:
      "Famous horse-racing events in the UK include Royal Ascot and the Grand National.",
  },
  {
    id: "175",
    question:
      "Which of the events relates to the German bombing of London and other British cities at night time during the World War II?",
    answer:
      "The Blitz relates to the German bombing of London and other British cities at night time during the World War II",
  },
  {
    id: "176",
    question:
      "Who wrote an oratorio called ‘Messiah’, which is regularly sung by choirs at Easter time?",
    answer:
      "George Frederick Handel wrote an oratorio, Messiah, which is sung regularly by choirs, often at Easter time.",
  },
  {
    id: "177",
    question:
      "When did hereditary peers lose the automatic right to attend the House of Lords?",
    answer:
      "Since 1999, hereditary peers have lost the automatic right to attend the House of Lords.",
  },
  {
    id: "178",
    question: "Which  is England’s largest national park?",
    answer: "The Lake District is England’s largest national park.",
  },
  {
    id: "179",
    question: "Which social change took place during the ‘Swinging Sixties’?",
    answer:
      "The position of women in the workplace was improved during the ‘Swinging Sixties’.",
  },
  {
    id: "180",
    question: "Where was Emmeline Pankhurst born?",
    answer:
      "Emmeline Pankhurst was born in Manchester in 1858. She set up the women’s Franchise League in 1889, which fought to get the vote in local elections for married women. In 1903 she helped found the Women’s Social and Political Union (WSPU).",
  },
  {
    id: "181",
    question: "What are pantomimes based on?",
    answer:
      "Pantomimes are based on fairy stories and are light-hearted plays with music and comedy, enjoyed by family audiences. Many theatres produce a pantomime at Christmas time.",
  },
  {
    id: "182",
    question:
      "What was inscribed in the first coins to be minted in Britain during the Iron Age?",
    answer:
      "The people of the Iron Age made the first coins to be minted in Britain, some inscribed with the names of Iron Age kings.",
  },
  {
    id: "183",
    question:
      "What name is given to the Church of England in Scotland and the United States?",
    answer:
      "The Church of England is called the Episcopal Church in Scotland and the United States.",
  },
  {
    id: "184",
    question: "Who directed the movie ‘Four Weddings and a Funeral’ in 1994?",
    answer: "Four Weddings and a Funeral (1994) was directed by Mike Newell.",
  },
  {
    id: "185",
    question: "What was the population of the UK in 1951?",
    answer: "The population of the UK in 1951 was 50 million people.",
  },
  {
    id: "186",
    question: "Which TWO religions celebrate Diwali?",
    answer:
      "Diwali is celebrated by Hindus and Sikhs. It normally falls in October or November and lasts for five days. It is also often called the Festival of Lights.",
  },
  {
    id: "187",
    question:
      "Proceedings in Parliament are broadcast on television and published in official reports called Hansard. True or False?",
    answer: "True",
  },
  {
    id: "188",
    question:
      "In Northern Ireland, a newly qualified driver must display an R plate for one year after passing the test.",
    answer: "True",
  },
  {
    id: "189",
    question: "How many ski centres are there in Scotland?",
    answer:
      "There are five ski centres in Scotland, as well as Europe’s longest dry ski slope near Edinburgh.",
  },
  {
    id: "190",
    question: "Which is the oldest tennis tournament in the world?",
    answer:
      "The most famous tournament hosted in Britain is The Wimbledon Championships, which takes place each year at the All England Lawn Tennis and Croquet Club. It is the oldest tennis tournament in the world and the only ‘Grand Slam’ event played on grass.",
  },
  {
    id: "191",
    question:
      "Which of the following is a British invention of the 20th century?- The Harrier Jump Jet, Radon, Paraffin wax, The lightbulb",
    answer:
      "The Harrier jump jet, an aircraft capable of taking off vertically, is a British invention of the 20th century.",
  },
  {
    id: "192",
    question:
      "Churchill was the son of a politician and, before becoming a Conservative MP in 1900, was a soldier and journalist. In May 1940 he became Prime Minister of the UK. True or False?",
    answer: "True",
  },
  {
    id: "193",
    question:
      "During the 17th century there were two main groups in Parliament, which were known as:",
    answer:
      "During the 17th century there were two main groups in Parliament, known as the Whigs and the Tories.",
  },
  {
    id: "194",
    question: "Where is the ‘Eden Project’ located?",
    answer:
      "The Eden Project is located in Cornwall, in the south west of England. Its biomes, which are like giant greenhouses, house plants from all over the world. The Eden Project is also a charity which runs environmental and social projects internationally.",
  },
  {
    id: "195",
    question: "What is a traditional food from Northern Ireland?",
    answer:
      "Ulster fry – a fried meal with bacon, eggs, sausage, black pudding, tomatoes, mushrooms, soda bread and potato bread – is a traditional food from Northern Ireland.",
  },
  {
    id: "196",
    question: "Who is the author of the murder mystery play ‘The Mousetrap’?",
    answer:
      "The Mousetrap, a murder-mystery play by Dame Agatha Christie, has been running in the west end since 1952 and has had the longest initial run of any show in history.",
  },
  {
    id: "197",
    question:
      "Under which Act was the United Kingdom of Great Britain and Northern Ireland created?",
    answer:
      "In 1801, Ireland became unified with England, Scotland and Wales after the Act of Union of 1800. This created the United Kingdom of Great Britain and Ireland.",
  },
  {
    id: "198",
    question: "When was the voting age reduced to 18 for men and women?",
    answer: "In 1969, the voting age was reduced to 18 for men and women.",
  },
  {
    id: "199",
    question: "Where is the city of Bradford located?",
    answer: "Bradford is located in England.",
  },
  {
    id: "200",
    question: "Which flag comprises a red cross on a white ground?",
    answer:
      "The cross of St George, patron saint of England, is a red cross on a white ground.",
  },
  {
    id: "201",
    question: "When did the first farmers arrive in Britain?",
    answer: "The first farmers arrived in Britain 6,000 years ago.",
  },
  {
    id: "202",
    question: "In which English county is the monument of Stonehenge located?",
    answer:
      "The ancestors of the first farmers probably came from south-east Europe. These people built houses, tombs and monuments on the land. One of these monuments, Stonehenge, still stands in what is now the English county of Wiltshire.",
  },
  {
    id: "203",
    question: "What is the best-known work from Robert Burns?",
    answer:
      "Burns’ best-known work is probably the song Auld Lang Syne, which is sung by people in the UK and other countries when they are celebrating the New Year (or Hogmanay as it is called in Scotland).",
  },
  {
    id: "204",
    question:
      "Which of the crosses does NOT form part of the Union Flag? Cross of St George, Cross of St Andrew, Cross of St David, Cross of St Patrick",
    answer:
      "The cross of St David, patron saint of Wales does not form part of the Union Flag because, when the first Union Flag was created in 1606 from the flags of Scotland and England, the Principality of Wales was already untied with England.",
  },
  {
    id: "205",
    question:
      "Who was the first British distance runner to win a gold medal in the Olympic games in the 10,000 metres?",
    answer:
      "Mo Farah (1983-) is a British distance runner, born in Somalia. He won gold medals in the 2012 Olympics for the 5,000 and 10,000 metres and is the first Briton to win the Olympic gold medal in the 10,000 metres.",
  },
  {
    id: "206",
    question:
      "In Scotland, the 31st December is called Hogmanay and 2 January is also a public holiday. For some Scottish people, Hogmanay is a bigger holiday than Christmas. True or False?",
    answer: "True",
  },

  {
    id: "207",
    question:
      "What British actor was best known for his roles in various Shakespeare plays?",
    answer:
      "The Laurence Olivier Awards take place annually at different venues in London. There are a variety of categories, including best director, best actor and best actress. The awards are named after the British actor Sir Laurence Olivier, late Lord Olivier, who was best known for his roles in various Shakespeare plays.",
  },
  {
    id: "208",
    question: "Who built the Tower of London after becoming king in 1066?",
    answer:
      "The Tower of London was first built by William the Conqueror after he became king in 1066.",
  },
  {
    id: "209",
    question:
      "Who succeeded David Cameron as Prime Minister after the referendum on the UK’s membership of the European Union?",
    answer:
      "David Cameron was succeeded as Prime Minister after the Brexit referendum by Theresa May on 13 July 2016. The Brexit referendum was held on 23 June 2016.",
  },
  {
    id: "210",
    question:
      "Who composed a suite of pieces themed around the planets and the solar system called ‘The Planets’?",
    answer:
      "Important British composers include Gustav Holst, whose work includes The Planets, a suite of pieces themed around the planets and the solar system.",
  },
  {
    id: "211",
    question: "What was the population of the UK in 1998?",
    answer: "The population of the UK in 1998 was 57 million people.",
  },
  {
    id: "212",
    question: "Who is the chief officer of the House of Commons?",
    answer:
      "Debates in the House of Commons are chaired by the Speaker. This person is the chief officer of the House of Commons. The Speaker is elected by MPs and is expected to be impartial.",
  },
  {
    id: "213",
    question: "What characterises the British constitution?",
    answer:
      "The British constitution is not written down in any single document, and therefore it is described as ‘unwritten’. This is mainly because the UK, unlike America or France, has never had a revolution which led permanently to a totally new system of government.",
  },

  {
    id: "214",
    question: "How old was Queen Victoria when she became Queen in 1837?",
    answer: "In 1837, Queen Victoria became queen of the UK at the age of 18.",
  },

  {
    id: "215",
    question: "When did the First World War start?",
    answer:
      "On 28 June 1914, Archduke Franz Ferdinand of Austria was assassinated. This set off a chain of events leading to the First World War (1914-18). The war started on 4 August 1914 when Germany invaded Belgium.",
  },
  {
    id: "216",
    question: "Who forms the judiciary?",
    answer:
      "Judges (who are together called ‘the judiciary’) are responsible for interpreting the law and ensuring that trials are conducted fairly.",
  },
  {
    id: "217",
    question: "Which  is a musical venue located in London?",
    answer:
      "There are many large venues that host music events throughout the year, such as: The O2 in Greenwich, south-east London.",
  },
  {
    id: "218",
    question: "Who directed the movie ‘The Killing Fields’ in 1984?",
    answer: "The Killing Fields (1984) was directed by Roland Joffé.",
  },

  {
    id: "219",
    question:
      "Name TWO castles are located in Scotland? - Conwy Castle, Inveraray Castle, Caernarfon Castle, Crathes Castle",
    answer: "Inveraray Castle and Crathes Castle are located in Scotland.",
  },

  {
    id: "220",
    question: "Which battle signified the end of the Wars of the Roses?",
    answer:
      "The Wars of the Roses ended with the Battle of Bosworth Field in 1485. This battle was fought between the forces of Richard III and Henry Tudor, who became Henry VII.",
  },

  {
    id: "221",
    question:
      "If an MP dies or resigns, there will be a fresh election, which is known as:",
    answer:
      "If an MP dies or resigns, there will be a fresh election, called a by-election, in his or her constituency.",
  },

  {
    id: "222",
    question:
      "A person who has not paid enough National Insurance contributions will not be able to receive certain contributory benefits including :",
    answer:
      "Anyone who does not pay enough National Insurance Contributions will not be able to receive certain contributory benefits such as Jobseeker’s Allowance or a full state retirement pension.",
  },

  {
    id: "223",
    question:
      "Who succeeded Theresa May as Prime Minister on the 24th July 2019?",
    answer: "Theresa May was succeeded by Boris Johnson on 24 July 2019.",
  },

  {
    id: "224",
    question:
      "What name is given to the period of rapid development of industry in Britain in the 18th and 19th centuries?",
    answer:
      "The Industrial Revolution was the rapid development of industry in Britain in the 18th and 19th centuries.",
  },

  {
    id: "225",
    question:
      "During the slave trade, slaves were taken from West Africa to America and the Caribbean to work on tobacco and sugar plantations. True or False?",
    answer: "True",
  },

  {
    id: "226",
    question:
      "Who was responsible for the construction of the Great Western Railway?",
    answer:
      "Isambard Kingdom Brunel was responsible for constructing the Great Western Railway, which was the first major railway built in Britain.",
  },

  {
    id: "227",
    question: "How many members comprise the UN Security Council?",
    answer:
      "There are 15 members on the UN Security Council, which recommends action when there are international crises and threats to peace.",
  },

  {
    id: "228",
    question: "Which TWO forts form part of Hadrian’s Wall?",
    answer:
      "Parts of Hadrian’s Wall include the forts of Housesteads and Vindolanda.",
  },

  {
    id: "229",
    question:
      "Members of the Welsh government can speak in either English or Welsh, but all of the Senedd’s publications have to be in English:  True or False?",
    answer:
      "Members of the Welsh government can speak in either English or Welsh, and all publications of the Senedd’s publications are in both languages.",
  },

  {
    id: "230",
    question: "Why did Elizabeth I keep her cousin Mary prisoner for 20 years?",
    answer:
      "Elizabeth suspected Mary of wanting to take over the English throne, and kept her prisoner for 20 years.",
  },

  {
    id: "231",
    question: "What was the name of the first cloned mammal?",
    answer:
      "In 1996, two British scientists, Sir Ian Wilmot and Keith Campbell, led a team which was the first to succeed in cloning a mammal, Dolly the sheep.",
  },

  {
    id: "232",
    question:
      "Who is responsible for the creation of the European Convention on Human Rights and Fundamental Freedoms?",
    answer:
      "The Council of Europe has no power to make laws but draws up conventions and charters, the most well-known of which is the European Convention on Human Rights and Fundamental Freedoms.",
  },

  {
    id: "233",
    question:
      "Members of the House of Lords may stand for election to the House of Commons and are eligible for all public offices: True or False?",
    answer:
      "Members of the House of Lords may not stand for election to the House of Commons but are eligible for all other public offices.",
  },

  {
    id: "234",
    question:
      "What TWO names are given to the people who give tours at the Tower of London?",
    answer:
      "Tours to the Tower of London are given by the Yeoman Warders, also known as Beefeaters, who tell visitors about the building’s history.",
  },

  {
    id: "235",
    question: "What is a traditional Scottish food?",
    answer:
      "Haggis – a sheep’s stomach stuffed with offal, suet, onions and oatmeal – is a traditional Scottish food.",
  },

  {
    id: "236",
    question: "How often do the Laurence Olivier Awards take place?",
    answer:
      "The Laurence Olivier Awards take place annually at different venues in London.",
  },

  {
    id: "237",
    question: "When is St Patrick’s Day, patron to of Northern Ireland?",
    answer:
      "St Patrick’s Day, patron to of Northern Ireland is on the 17th of March.",
  },

  {
    id: "248",
    question: "What does the term ‘PDSA’ stand for?",
    answer: "‘PDSA’ stands for People’s Dispensary for Sick Animals.",
  },

  {
    id: "249",
    question: "Which are TWO islands are ‘Crown dependencies’",
    answer:
      "There are several islands which are closely linked with the UK but are not part of it: the Channel Islands and the Isle of Man. These have their own governments and are called ‘Crown dependencies’.",
  },

  {
    id: "250",
    question:
      "When did English settlers begin to colonise the eastern coast of America?",
    answer:
      "In Elizabeth I’s time, English settlers first began to colonise the eastern coast of America.",
  },

  {
    id: "251",
    question:
      "What is the name of the annual event that gives awards in a range of musical categories, such as best British group and best British solo artist?",
    answer:
      "The Brit Awards is an annual event that gives awards in a range of categories, such as best British group and best British solo artist.",
  },

  {
    id: "252",
    question:
      "How often do the ministers that form the Cabinet meet to make important decisions about government policy?",
    answer:
      "The cabinet is a committee which usually meets weekly and makes important decisions about government policy.",
  },

  {
    id: "253",
    question: "How many Welsh-language channels are there in Wales?",
    answer: "There is one Welsh-language channel in Wales.",
  },

  {
    id: "254",
    question: "How many countries are members of the United Nations?",
    answer:
      "The UK is part of the United Nations (UN), an international organization with more than 190 countries as members. The UN was set up in 1945 to promote peace and security, and to help countries work together to solve problems.",
  },

  {
    id: "255",
    question:
      "What is the system by which the income tax is automatically taken from the employee’s income by their employer and paid directly to HM Revenue & Customs (HMRC)?",
    answer:
      "For most people, the right amount of income tax is automatically taken from their income from employment by their employer and paid directly to HM Revenue & Customs (HMRC), the government department that collects taxes. This system is called “Pay As You Earn” (PAYE).",
  },

  {
    id: "256",
    question:
      "How many British casualties were recorded during the First World War?",
    answer:
      "During the First World War millions of people were killed or wounded, with more than 2 million British casualties.",
  },

  {
    id: "257",
    question: "Why did Henry VIII decide to divorce Catherine of Aragon?",
    answer:
      "When Catherine was too old to give him another child, Henry VIII decided to divorce her, hoping that another wife would give him a son to be his heir.",
  },

  {
    id: "258",
    question: "How many local authorities are there in London",
    answer:
      "London has 33 local authorities, with the Greater London Authority and the Mayor of London coordinating policies across the capital.",
  },

  {
    id: "259",
    question: "When did British combat troops leave Iraq?",
    answer: "British combat troops left Iraq in 2009.",
  },
  {
    id: "260",
    question: "Where is the Parliament of the UK?",
    answer: "The UK is governed by the parliament sitting in Westminster.",
  },

  {
    id: "261",
    question:
      "Is it  illegal and a criminal offence to sell tobacco products (for example, cigarettes, cigars, roll-up tobacco) to anyone under the age of 18. True or False?",
    answer: "True",
  },
  {
    id: "262",
    question: "Who used a system of land ownership known as feudalism?",
    answer: "The Normans used a system of land ownership known as feudalism.",
  },

  {
    id: "263",
    question:
      "The line ‘all the world’s a stage’ belongs to which of the following plays or poems written by William Shakespeare?",
    answer:
      "All the world’s a stage’ are lines from William Shakespeare’s play As You Like It.",
  },
  {
    id: "264",
    question: "What architectural style became popular in the 19th century?",
    answer:
      "In the 19th century, the medieval ’gothic’ style became popular again. As cities expanded, many great public buildings were built in this style. The Houses of Parliament and St Pancras Station were built at this time, as were the town halls in cities such as Manchester and Sheffield.",
  },
  {
    id: "265",
    question:
      "Which of the following gardens is NOT located in England? Mount Stewart, Kew Gardens, Sissinghurst, Hidcote",
    answer:
      "There are famous gardens to visit throughout the UK, including Kew Gardens, Sissinghurst and Hidcote in England, Crathes Castle and Inveraray Castle in Scotland, Bodnant Garden in Wales, and Mount Stewart in Northern Ireland.",
  },
  {
    id: "266",
    question:
      "Which TWO families started a civil war to decide who should be king of England in 1455?",
    answer:
      "In 1455, a civil war was begun to decide who should be king of England. It was fought between the supporters of two families: the House of Lancaster and the House of York.",
  },
  {
    id: "267",
    question:
      "Who was in charge of the British fleet at the Battle of Trafalgar?",
    answer:
      "Admiral Nelson was in charge of the British fleet at Trafalgar and was killed in the battle.",
  },
  {
    id: "268",
    question:
      "Which court deals with serious criminal offences in Northern Ireland?",
    answer:
      "In England, Wales and Northern Ireland, serious offences are tried in front of a judge and a jury in a Crown Court. In Scotland, serious cases are heard in a Sheriff Court with either a sheriff or a sheriff with a jury.",
  },
  {
    id: "269",
    question: "Which political party does the Speaker represent?",
    answer:
      "The Speaker is neutral and does not represent a political party, even though he or she is an MP, represents a constituency and deals with the constituents’ problems like any other MP.",
  },
  {
    id: "270",
    question: "When was the Scottish Parliament formed?",
    answer: "The Scottish Parliament was formed in 1999.",
  },
  {
    id: "271",
    question: "What characterised the Bronze Age?",
    answer:
      "During the Bronze Age people lived in roundhouses and buried their dead in tombs called round barrows.",
  },
  {
    id: "272",
    question:
      "The Man Booker Prize for Fiction is awarded annually for the best fiction novel written by an author from:",
    answer:
      "The Man Booker Prize for Fiction is awarded annually for the best fiction novel written by an author from the Commonwealth, Ireland or Zimbabwe. It has been awarded since 1968.",
  },
  {
    id: "273",
    question: "Gaelic language is spoken in which parts of the UK?",
    answer:
      "In Scotland, Gaelic is spoken in some parts of the Highlands and Islands, and in Northern Ireland some people speak Irish Gaelic.",
  },
  {
    id: "274",
    question:
      "How many British citizens left the country between 1853 and 1913?",
    answer:
      "Between 1853 and 1913, as many as 13 million British citizens left the country.",
  },
  {
    id: "275",
    question: "Where was the main Olympic site for the 2012 Games?",
    answer:
      "The main Olympic site for the 2012 Games was in Stratford, East London.",
  },
  {
    id: "276",
    question: "Who forms the shadow cabinet?",
    answer:
      "The leader of the opposition also appoints senior opposition MPs to be ‘shadow ministers’. They form the shadow cabinet and their role is to challenge the government and put forward alternative policies.",
  },
  {
    id: "277",
    question: "Who was the leader of the English Republic?",
    answer: "Oliver Cromwell was the leader of the English republic.",
  },
  {
    id: "278",
    question:
      "According to the 2011 Census, what percentage of the population identified themselves as Hindu?",
    answer:
      "In the 2011 Census, 59% of people identified themselves as Christian. Much smaller proportions identified themselves as Muslim (4.8%), Hindu (1.5%), Sikh (0.8%), Jewish or Buddhist (both less than 0.5%).",
  },
  {
    id: "279",
    question: "People in the UK have to pay tax on any earnings from:",
    answer:
      "People in the UK have to pay tax on their income, which includes: wages from paid employment, profits from self-employment, taxable benefits, pensions and income from property, savings and dividends.",
  },
  {
    id: "280",
    question: "How many devolved administrations are there in the UK?",
    answer:
      "There are three devolved administrations in the UK, these include: the Welsh government, the Scottish Parliament and the Northern Ireland Assembly.",
  },
  {
    id: "281",
    question:
      "Who is responsible for interpreting the law and ensuring that trials are conducted fairly?",
    answer:
      "Judges (who are together called ‘the judiciary’) are responsible for interpreting the law and ensuring that trials are conducted fairly.",
  },
  {
    id: "281",
    question:
      "How often do people who are 70 years old or over need to renew their driving licence?",
    answer:
      "Drivers can use their driving licence until they are 70 years old. After that, the licence is valid for three years at a time.",
  },
  {
    id: "282",
    question: "Where was Margaret Thatcher born?",
    answer:
      "Margaret Thatcher was the daughter of a grocer from Grantham in Lincolnshire.",
  },
  {
    id: "283",
    question: "Jenson Button is a famous:",
    answer: "Jenson Button is a famous Formula 1 driver.",
  },
  {
    id: "284",
    question:
      "Who introduced the Statute of Rhuddlan by which Wales was annexed to the Crown of England in 1284?",
    answer:
      "In 1284 King Edward I of England introduced the Statute of Rhuddlan, which annexed Wales to the Crown of England.",
  },
  {
    id: "285",
    question: "When was the Brexit referendum held?",
    answer: "The Brexit referendum was held on 23 June 2016.",
  },

];

export default allFlashcards;