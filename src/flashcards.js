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
    question: "What is a traditional English food?",
    answer: "Roast beef and fish and chips are traditional English food.",
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
    answer:
      "The National Trust was founded in 1895 by three volunteers. The National Trust works for the preservation of important buildings, coastline and countryside in the UK.",
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
    question: "Which operas was written by Gilbert and Sullivan?",
    answer:
      "In the 19th century, Gilbert and Sullivan wrote comic operas, often making fun of popular culture and politics. These operas include HMS Pinafore, The Pirates of Penzance and The Mikado.",
  },
  {
    id: "33",
    question: "Where is Loch Lomond and the Trossachs National Park located?",
    answer:
      "Loch Lomond and the Trossachs National Park is located in the west of Scotland. Loch Lomond is the largest expanse of fresh water in mainland Britain and probably the best-known part of the park",
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
    answer: "The First World War ended in 1918.",
  },
  {
    id: "54",
    question: "What are traditional Welsh cakes made of?",
    answer:
      "Welsh cakes are a traditional Welsh snack made from flour, dried fruits and spices, and served either hot or cold.",
  },
  {
    id: "55",
    question: "Where is the London Eye situated?",
    answer:
      "The London Eye is situated on the southern bank of the River Thames and is a Ferris wheel that is 443 feet (135 metres) tall. The London Eye was originally built as part of the UK’s celebration of the new millennium and continues to be an important part of New Year celebrations.",
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
      "You will receive a fine up to £1,000 if you watch TV but do not have a TV licence. Everyone in the UK with a TV, computer or other medium which can be used for watching TV must have a television licence.",
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
      "This procedure is used for claims of less than £10,000 in England and Wales and £3,000 in Scotland and Northern Ireland.You can get details about the small claims procedure from your local County Court or Sheriff Court.",
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
    question: "What is the responsibility of the Chancellor of the Exchequer?",
    answer: "The Chancellor of the Exchequer is responsible for the economy.",
  },
  {
    id: "71",
    question: "In which British university did Isaac Newton study?",
    answer: "Isaac Newton studied at Cambridge University. Isaac Newton was born in Lincolnshire, eastern England. Isaac Newton most famous published work was Philosophiae Naturalis Principia Mathematica (‘Mathematical Principle of Natural Philosophy’), which showed how gravity applied to the whole universe.",
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
      "Hanukkah is in November or December and is celebrated for eight days. It is to remember the Jews’ struggle for religious freedom.  On each day of the festival a candle is lit on a stand of eight candles (called a menorah) to remember the story of the festival, where oil that should have lasted only a day did so for eight.",
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
    answer: "Forcing another person to marry is a criminal offence. Selling tobacco to anyone under the age of 18 and drinking in public are examples of criminal offences.",
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
      "In 1815, the French Wars ended with the defeat of the Emperor Napoleon by the Duke of Wellington at the Battle of Waterloo. Wellington was known as the Iron Duke and later became Prime Minister.",
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
    answer: "Julius Caesar led a Roman invasion of Britain in 55 BC. This was unsuccessful and for nearly 100 years Britain remained separate from the Roman Empire.",
  },
  {
    id: "99",
    question: "Who wrote ‘The Lord of the Rings’? ",
    answer:
      "In 2003, The Lord of the Rings written by JRR Tolkien was voted the country’s best-loved novel..",
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
      "The Northern Ireland Assembly can make decisions on issues such as education, agriculture, the environment, health and social services. It cannot make decisions on defence. Policy and laws governing defence, foreign affairs, immigration, taxation and social security all remain under central UK government control. However, many other public services, such as education, are controlled by the devolved administrations. ",
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
      "The first verse of the National Anthem of the UK is ‘God save our gracious King!. Long live our noble King! is the second sentence of the National Anthem of the UK.",
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
      "This is a public service broadcaster providing television and radio programmes. The BBC is the largest broadcaster in the world. It is the only wholly state-funded media organisation that is independent of government. The BBC started radio broadcasts in 1922 and began the world’s first regular television service in 1936.",
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
      "Almost everybody in the UK who is in paid work, including self-employed people, must pay National Insurance Contributions. The money raised from National Insurance Contributions is used to pay for state benefits and services such as the state retirement pension and the National Health Service (NHS).",
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
      "Florence Nightingale is often regarded as the founder of modern nursing. She was a nurse who worked in military hospitals, treating soldiers who were fighting in the Crimean War. From 1853 to 1856, Britain fought with Turkey and France against Russia in the Crimean War.",
  },

  {
    id: "133",
    question:
      "Which Act abolished slavery throughout the British Empire in 1833?",
    answer:
      "In 1833 the Emancipation Act abolished slavery throughout the British Empire. The Royal Navy stopped slave ships from other countries, freed the slaves and punished the slave traders. The first formal anti-slavery groups were set up by the Quakers in the late 1700s, and they petitioned Parliament to ban the practice. Slaves came primarily from West Africa.",
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
      "Habeas corpus is Latin for ‘you must present the person in court’. The Habeas Corpus Act became law in 1679. This was a very important piece of legislation which remains relevant today. The Act guaranteed that no one could be held prisoner unlawfully. Every prisoner has a right to a court hearing.",
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
      "People facing domestic violence can get help from a solicitor or the Citizens Advice Bureau. If you are facing domestic violence you can get help from the 24-hour National Domestic Violence Freephone Helpline on 0808 2000 247 at any time, or the police can help you find a safe place to stay. ",
  },

  {
    id: "140",
    question:
      "Which American President worked closely with Margaret Thatcher? ",
    answer:
      "Margaret Thatcher worked closely with the United States President, Ronald Reagan, and was one of the first Western leaders to recognise and welcome the changes in the leadership of the Soviet Union which eventually led to the end of the Cold War. Margaret Thatcher, Britain’s first woman Prime Minister, led the Conservative government from 1979 to 1990.",
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
      " The Speaker keeps order during political debates to make sure the rules are followed. Debates in the House of Commons are chaired by the Speaker.",
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
      "Britain and France developed the world’s only supersonic commercial airliner, Concorde.The ‘Concorde’, the world’s only supersonic passenger aircraft, first flew in 1969. The ‘Concorde’ began carrying passengers in 1976. ",
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
      "The Council of Europe is responsible for the protection and promotion of human rights in its member countries. The Council of Europe is separated from the EU. It has 47 member countries, including the UK. The Council of Europe has NO power to make laws but draws up conventions and charters, the most well-known of which is the European Convention on Human Rights and Fundamental Freedoms, usually called the European Convention on Human Rights.",
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
      "The law of abortion and the law of divorce were liberalised during the ‘Swinging Sixties’. The decade of the 1960s was a period of significant social change. It was known as the ‘swinging sixties’. There was growth in British fashion, cinema and popular music. ",
  },

  {
    id: "160",
    question: "Who was the mother of Elizabeth I? ",
    answer: "Anne Boleyn and Henry VIII had one daughter, Elizabeth I. ",
  },

  {
    id: "161",
    question: "Who was the first wife of Henry VIII?",
    answer:
      "Catherine of Aragon was the first wife of Henry VIII. Catherine of Aragon was a Spanish princess.",
  },
  {
    id: "162",
    question: "Which flag is not represented in the union flag?",
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
    answer:
      "The Northern Ireland Parliament was first established in 1922, when Ireland was divided, but it was abolished in 1972, shortly after the Troubles broke out in 1969.",
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
      "After the Norman Conquest, the king and his noblemen had spoken Norman French and the peasants had continued to speak Anglo-Saxon. Gradually these two languages combined to become one English language. The Norman Conquest was the last successful foreign invasion of England and led to many changes in government and social structures in England.",
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
      "George Frederick Handel wrote an oratorio, Messiah, which is sung regularly by choirs, often at Easter time. George Frederick Handel wrote the Water Music for King George I and Music for the Royal Fireworks for his son, George II.",
  },
  {
    id: "177",
    question:
      "When did hereditary peers lose the automatic right to attend the House of Lords?",
    answer:
      "Since 1999, hereditary peers have lost the automatic right to attend the House of Lords. They now elect a few of their number to represent them in the House of Lords.",
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
      "The position of women in the workplace was improved during the ‘Swinging Sixties’. The decade of the 1960s was a period of significant social change. It was known as the ‘swinging sixties’. There was growth in British fashion, cinema and popular music.",
  },
  {
    id: "180",
    question: "Where was Emmeline Pankhurst born?",
    answer:
      "Emmeline Pankhurst was born in Manchester in 1858. She set up the women’s Franchise League in 1889, which fought to get the vote in local elections for married women. In 1903 she helped found the Women’s Social and Political Union (WSPU). Emmeline Pankhurst died in 1928. Shortly before Emmeline’s death, women were given the right to vote at the age of 21, the same as men.",
  },
  {
    id: "181",
    question: "What are pantomimes based on?",
    answer:
      "Pantomimes are based on fairy stories and are light-hearted plays with music and comedy, enjoyed by family audiences. Many theatres produce a pantomime at Christmas time. One of the traditional characters of the pantomimes is the Dame, a woman played by a man.",
  },
  {
    id: "182",
    question:
      "What was inscribed in the first coins to be minted in Britain during the Iron Age?",
    answer:
      "The people of the Iron Age had a sophisticated culture and economy. They made the first coins to be minted in Britain, some inscribed with the names of Iron Age kings.",
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
      "The most famous tournament hosted in Britain is The Wimbledon Championships, which takes place each year at the All England Lawn Tennis and Croquet Club. It is the oldest tennis tournament in the world and the only ‘Grand Slam’ event played on grass. Modern tennis evolved in England in the late 19th century.",
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
      "In 1801, Ireland became unified with England, Scotland and Wales after the Act of Union of 1800. This created the United Kingdom of Great Britain and Ireland. The Act of Union, known as the Treaty of Union in Scotland, was therefore agreed in 1707, creating the Kingdom of Great Britain.",
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
      "Anyone who does not pay enough National Insurance Contributions will not be able to receive certain contributory benefits such as Jobseeker’s Allowance or a full state retirement pension. The money raised from National Insurance Contributions is used to pay for state benefits and services such as the state retirement pension and the National Health Service (NHS).",
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
      "There are 15 members on the UN Security Council, which recommends action when there are international crises and threats to peace. The UK is one of five permanent members of the Security Council.",
  },

  {
    id: "228",
    question: "Which TWO forts form part of Hadrian’s Wall?",
    answer:
      "Parts of Hadrian’s Wall include the forts of Housesteads and Vindolanda. Areas of what is now Scotland were never conquered by the Romans, and the Emperor Hadrian built a wall in the north of England to keep out the Picts (ancestors of the Scottish people). The wall was built in AD 122 and ran from Wallsend on the River Tyne to Bowness-on-Solway on the Solway Firth.",
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
      "In 1996, two British scientists, Sir Ian Wilmot   (1944-) and Keith Campbell (1954-2012), led a team which was the first to succeed in cloning a mammal, Dolly the sheep.",
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
      "The UK is part of the United Nations (UN), an international organization with more than 190 countries as members. The UN was set up in 1945, after the Second World War, and aims to prevent war to promote international peace and security, and to help countries work together to solve problems.",
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
    answer: "True. Selling tobacco to anyone under the age of 18 and drinking in public are examples of criminal offences.",
  },
  {
    id: "262",
    question: "Who used a system of land ownership known as feudalism?",
    answer: "The Normans used a system of land ownership known as feudalism.",
  },

  {
    id: "263",
    question:
      "The line ‘all the world’s a stage’ belongs to which of the plays or poems written by William Shakespeare?",
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
      "Admiral Nelson was in charge of the British fleet at Trafalgar and was killed in the battle. Admiral Nelson’s ship was known as the HMS Victory. Admiral Nelson’s ship, HMS Victory, can be visited in Portsmouth.Britain’s navy fought against combined French and Spanish fleets, winning the Battle of Trafalgar in 1805.",
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
    answer:
      "The Scottish Parliament was formed in 1999. The Scottish Parliament can legislate on: civil and criminal law, health, education, planning and additional tax-raising powers.",
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
      "There are three devolved administrations in the UK, these include: the Welsh government, the Scottish Parliament and the Northern Ireland Assembly. Scotland, Wales and Northern Ireland also have parliaments or assemblies of their own, with devolved powers in defined areas.",
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
      "Margaret Thatcher was the daughter of a grocer from Grantham in Lincolnshire. Margaret Thatcher, Britain’s first woman Prime Minister, led the Conservative government from 1979 to 1990.",
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
    answer:
      "The referendum on the UK’s membership of the European Union or Brexit referendum was held on 23 June 2016.",
  },

  {
    id: "286",
    question: "Who was known as the Iron Duke?",
    answer:
      "In 1815, the French Wars ended with the defeat of the Emperor Napoleon by the Duke of Wellington at the Battle of Waterloo. Wellington was known as the Iron Duke and later became Prime Minister.",
  },
  {
    id: "287",
    question: "Who appoints the members of the Cabinet?",
    answer:
      "The Prime Minister (PM) is the leader of the political party in power. He or she appoints the members of the cabinet and has control over many important public appointments.",
  },
  {
    id: "288",
    question: "Is the mobile phone a British invention ?",
    answer:
      "The World Wide Web, the Turing machine and the hovercraft are British inventions. The mobile phone is not.",
  },
  {
    id: "289",
    question: "When did Argentina invade the Falklands Islands?",
    answer:
      "In 1982, Argentina invaded the Falkland Islands, a British overseas territory in the South Atlantic.",
  },
  {
    id: "290",
    question:
      "County Courts deal with a wide range of civil disputes including family matters, breaches of contract and divorce. True or False?",
    answer: "True.",
  },
  {
    id: "291",
    question:
      "According to 2011 Census, what percentage of the population identified themselves as Sikh?",
    answer:
      "In the 2011 Census, 59% of people identified themselves as Christian. Much smaller proportions identified themselves as Muslim (4.8%), Hindu (1.5%), Sikh (0.8%), Jewish or Buddhist (both less than 0.5%).",
  },
  {
    id: "292",
    question: "Which  are British overseas territories?",
    answer:
      "There are several British overseas territories in other parts of the world, such as St Helena and the Falkland Islands. They are also linked to the UK but are not part of it.",
  },
  {
    id: "293",
    question:
      "When did Alexander Fleming win the Nobel Prize in medicine for the discovery of the penicillin?",
    answer:
      "Fleming won the Nobel Prize in Medicine in 1945 for the discovery of the penicillin.",
  },
  {
    id: "294",
    question: "What is Sir Jackie Stewart famous for?",
    answer:
      "Sir Jackie Stewart is a Scottish former racing driver who won the Formula 1 world championship three times.",
  },
  {
    id: "295",
    question:
      "The decade of the 1960s was a period of significant social change, when there was growth in British fashion, cinema and popular music:",
    answer: "This statement is true.",
  },
  {
    id: "296",
    question:
      "When did Britain and France develop the world’s only supersonic commercial airliner known as ‘The Concorde’?",
    answer:
      "The 1960s was a time of technological progress, when Britain and France developed the world’s only supersonic commercial airliner, Concorde. It was first flown in 1969 and entered service in 1976.",
  },
  {
    id: "297",
    question: "Where can you find copies of the ‘Hansard’?",
    answer:
      "Proceedings in Parliament are broadcast on television and published in official reports called Hansard. Written reports can be found in large libraries and at www.parliament.uk.",
  },
  {
    id: "298",
    question: "Which flag has a diagonal white cross on a blue ground?",
    answer:
      "The cross of St Andrew, patron saint of Scotland, is a diagonal white cross on a blue ground.",
  },
  {
    id: "299",
    question: "How long do Muslims fast for during Ramadan?",
    answer:
      "Eid a-Fitr celebrates the end of Ramadan, when Muslims have fasted for a month. The day when Muslims thank Allah for giving them the strength to complete the fast is called Eid a-Fitr.",
  },
  {
    id: "300",
    question: "Which British actor has recently won an Oscar?",
    answer:
      "Recent British actors to have won Oscars include Colin Firth, Sir Antony Hopkins, Dame Judi Dench, Kate Winslet and Tilda Swinton.",
  },
  {
    id: "301",
    question: "Which was the first major railway built in Britain?",
    answer:
      "The Great Western Railway was the first major railway built in Britain. It was built by Isambard Kingdom Brunel and opened in 1838.",
  },
  {
    id: "302",
    question:
      "In the 15th century, Henry Tudor, the leader of the House of Lancaster, became:",
    answer:
      "In 1485, Henry Tudor, the leader of the House of Lancaster, became King Henry VII after defeating King Richard III of the House of York at the Battle of Bosworth Field.",
  },
  {
    id: "303",
    question: "How many senior MPs are appointed by the Prime Minister?",
    answer:
      "The Prime Minister appoints about 20 senior MPs to become ministers in charge of departments.",
  },
  {
    id: "304",
    question: "Who won an Olympic gold medal in the pentathlon in 1972?",
    answer:
      "Mary Peters was a talented athlete who won an Olympic gold medal in the pentathlon in 1972.",
  },
  {
    id: "305",
    question: "What is the capital city of Wales?",
    answer: "The capital city of Wales is Cardiff.",
  },
  {
    id: "306",
    question: "When did the Roman army leave Britain?",
    answer:
      "The Roman army left Britain in AD 410 to defend other parts of the Roman Empire and never returned.",
  },
  {
    id: "307",
    question: "The king is the head of state in the UK: True or False ",
    answer: "King Charles III is the head of state of the UK.",
  },
  {
    id: "308",
    question: "How long did the First World War last for?",
    answer: "The First World War lasted four years (1914 – 1918).",
  },
  {
    id: "309",
    question: "Who was Henry VII?",
    answer: "Henry VII was the leader of the House of Lancaster.",
  },
  {
    id: "310",
    question: "When were the Houses of Parliament built?",
    answer:
      "The Houses of Parliament and St Pancras Station were built in the 19th century, as were the town halls in cities such as Manchester and Sheffield.",
  },
  {
    id: "311",
    question: "How many volunteers work for the National Trust?",
    answer:
      "There are now more than 61,000 volunteers helping to keep the National Trust running.",
  },
  {
    id: "312",
    question: "What was the population of the UK in 1851?",
    answer: "The population of the UK in 1851 was 20 million people.",
  },

  {
    id: "313",
    question:
      "The line ‘a rose by any other name’ belongs to which of the plays or poems written by William Shakespeare?",
    answer:
      "‘A rose by any other name’ is a line from William Shakespeare’s play Romeo and Juliet.",
  },

  {
    id: "314",
    question: "Which religious community celebrates Vaisakhi?",
    answer:
      "Vaisakhi (also spelled Baisakhi) is a Sikh festival which celebrates the founding of the Sikh community known as the Khalsa. It is celebrated on the 14th of April each year with parades, dancing and singing.",
  },

  {
    id: "315",
    question:
      "Which British scientist made important discoveries working with steam power?",
    answer:
      "James Watt’s work on steam power, helped the progress of the Industrial Revolution.",
  },
  {
    id: "316",
    question: "How can you visit the Northern Ireland Assembly ",
    answer:
      "The Northern Ireland Assembly building is known as Stormont, Belfast. There are two ways to arrange a visit to the Northern Ireland Assembly at Stormont and it is located in Belfast.. You can either contact the Education Service (details are on the Northern Ireland Assembly website at http://www.niassembly.gov.uk) or contact an MLA.",
  },
  {
    id: "317",
    question: "When was the first television broadcast made?",
    answer:
      "In 1932 Scotsman John Logie Baird made the first television broadcast between London and Glasgow.",
  },
  {
    id: "318",
    question:
      "For what sort of claims is the small claims procedure in Northern Ireland used for?",
    answer:
      "The small claims procedure is used for claims of less than £3,000 in Northern Ireland.",
  },
  {
    id: "319",
    question:
      "How many Russian and Polish Jews came to Britain to escape prosecution between 1870 and 1914?",
    answer:
      "Between 1870 and 1914, around 120,000 Russian and Polish Jews came to Britain to escape persecution.",
  },
  {
    id: "320",
    question:
      "Which Anglo-Saxon poem is about a hero’s battle against monsters and has been translated into modern English?",
    answer:
      "The Anglo-Saxon poem Beowulf tells of its hero’s battles against monsters and is still translated into modern English.",
  },
  {
    id: "321",
    question: "Which movie was directed by Alfred Hitchcock in 1935?",
    answer: "The 39 Steps (1935) was directed by Alfred Hitchcock.",
  },
  {
    id: "322",
    question: "When was the National Health System (NHS) established?",
    answer:
      "In 1948, Aneurin (Nye) Bevan, the Minister for Health, led the establishment of the National Health Service (NHS), which guaranteed a minimum standard of health care for all, free at the point of use.",
  },
  {
    id: "323",
    question: "What is the note with the highest value in the UK?",
    answer: "The note with the highest value in the UK is the £50 note.",
  },
  {
    id: "324",
    question: "Who was Prime Minister of Britain from 1721 to 1742?",
    answer: "Sir Robert Walpole was Prime Minister from 1721 to 1742.",
  },
  {
    id: "325",
    question:
      "The Battle of Hastings is commemorated in a great piece of embroidery, which is known as:",
    answer:
      "The Battle of Hastings is commemorated in a great piece of embroidery, known as the Bayeux tapestry, which can still be seen in France today. The Bayeux Tapestry is nearly 70 metres (230 feet) long and is embroidered with coloured wool. In 1066, an invasion led by William, the Duke of Normandy (in what is now northern France), defeated Harold, the Saxon king of England, at the Battle of Hastings. Harold was killed in the battle.",
  },
  {
    id: "326",
    question:
      "A woman who is violent towards her partner cannot be prosecuted in the UK: True or False",
    answer:
      "False. Anyone who is violent towards their partner – whether they are a man or a woman, married or living together – can be prosecuted.",
  },
  {
    id: "527",
    question:
      "Many MPs, SMs and MSPs hold regular local events where constituents can go in person to talk about issues that are of concern to them. These are known as:",
    answer:
      "Many MPs, SMs and MSPs hold regular local ‘surgeries’, where constituents can go in person to talk about issues that are of concern to them. These surgeries are often advertised in the local newspaper.",
  },
  {
    id: "528",
    question:
      "Which golf ‘Major’ tournament is hosted by a different golf course every year?",
    answer:
      "The Open Championship is the only ‘Major’ tournament held outside United States. It is hosted by a different golf course every year.",
  },
  {
    id: "529",
    question:
      "Which act introduced the Forced Marriage Protection Orders for England, Wales and Northern Ireland in 2008?",
    answer:
      "Forced Marriage Protection Orders were introduced in 2008 for England, Wales and Northern Ireland under the Forced Marriage (Civil Protection) Act 2007. Similar Protection Orders were introduced in Scotland in November 2011.",
  },
  {
    id: "530",
    question:
      "Which  country did NOT join the European Economic Community when it was first formed in 1957?",
    answer:
      "The European Economic Community (EEC), was set up by six western European countries - West Germany, France, Belgium, Italy, Luxembourg and the Netherlands formed the European Economic Community (EEC) signed the Treaty of Rome on 25 March 1957. At first the UK did not wish to join the EEC but it eventually did so in 1973.",
  },
  {
    id: "531",
    question: "How many members does the Northern Ireland assembly have?",
    answer:
      "The Northern Ireland Assembly at Stormont, in Belfast  has 90 elected members, known as MLAs (members of the Legislative Assembly). They are elected with a form of proportional representation.",
  },
  {
    id: "532",
    question:
      "Which civil law include disputes between landlords and tenants over issues such as repairs and eviction?",
    answer:
      "Housing law includes disputes between landlords and tenants over issues suck as repairs and eviction.",
  },
  {
    id: "533",
    question: "How can you visit the Scottish Parliament?",
    answer:
      "To visit the Scottish Parliament, you can get information, book tickets or arrange tours through visitor services. You can also write to them at the Scottish Parliament, Edinburgh, EH99 1SP, telephone 0131 348 5200 or email sp.booking@scottish.parliament.",
  },
  {
    id: "534",
    question: "Which  garden is located in Wales?",
    answer:
      "There are famous gardens to visit throughout the UK, including Kew Gardens, Sissinghurst and Hidcote in England, Crathes Castle and Inveraray Castle in Scotland, Bodnant Garden in Wales, and Mount Stewart in Northern Ireland.",
  },
  {
    id: "535",
    question:
      "Who was reining in Britain when the British Empire became the largest empire the world has ever seen, with an estimated population of more than 400 million people?",
    answer:
      "During the Victorian period, the British Empire grew to cover all of India, Australia and large parts of Africa. It became the largest empire the world has ever seen, with an estimated population of more than 400 million people.",
  },
  {
    id: "536",
    question: "The UK is not part of which of the international institutions?",
    answer:
      "The UK is a member of the Council of Europe, the United Nations and the North Atlantic Treaty Organization (NATO). The UK is no longer a member of the European Union.",
  },
  {
    id: "537",
    question: "Where is the National Gallery of Scotland located?",
    answer: "The National Gallery of Scotland is in Edinburgh.",
  },
  {
    id: "538",
    question:
      "Where are the ancestors of the first farmers to arrive in Britain believed to come from?",
    answer:
      "The first farmers arrived in Britain 6,000 years ago. The ancestors of these first farmers probably came from south-east Europe. They brought with them the knowledge of farming and the use of stone tools.",
  },
  {
    id: "539",
    question: "What religion did Elizabeth I follow?",
    answer: "Queen Elizabeth I was a Protestant.",
  },
  {
    id: "540",
    question: "Who directed the movie ‘Chariots of Fire’ in 1981?",
    answer: "Chariots of Fire (1981) was directed by Hugh Hudson.",
  },
  {
    id: "541",
    question:
      "What do new citizens have to swear or affirm as part of the citizenship ceremony?",
    answer:
      "New citizens swear or affirm loyalty to the King as part of the citizenship ceremony. As part of the citizenship ceremony, new citizens pledge their loyalty to the United Kingdom and to respect its rights and freedoms.",
  },
  {
    id: "542",
    question:
      "In which TWO cases may a person who has been summoned to do jury service be exempted from doing it:",
    answer:
      "People on the electoral register with ages between 18 and 70 can be asked to serve on a jury. Everyone who is summoned to do jury service must do it unless they are not eligible (for example, because they have a criminal conviction) or they provide a good reason to be excused, such as ill health.",
  },
  {
    id: "543",
    question:
      "Which hill fort from the Iron Age can be seen in the county of Dorset?",
    answer:
      "A very impressive hill fort from the Iron Age can still be seen today at Maiden Castle, in the English county of Dorset.",
  },
  {
    id: "544",
    question:
      "On which issue the Northern Ireland Assembly CANNOT make decisions?",
    answer:
      "Planning. The Northern Ireland Assembly at Stormont, in Belfast can make decisions on issues such as education, agriculture, the environment, health and social services.",
  },
  {
    id: "545",
    question:
      "Who was the first person to sail single-handed around the world in 1966/67?",
    answer:
      "A British sailor, Sir Francis Chichester, was the first person to sail singlehanded around the world, in 1966/67. Two years later, Sir Robin Knox- Johnston became the first person to do this without stopping.",
  },
  {
    id: "546",
    question:
      "In 1837, Queen Victoria became queen of the UK at the age of 20.True or False?",
    answer:
      "False. In 1837, Queen Victoria became queen of the UK at the age of 18.",
  },
  {
    id: "547",
    question:
      "Who led the group of Catholics who tried to kill the Protestant king with a bomb in the Houses of the Parliament in 1605?",
    answer:
      "In 1605, a group of Catholics led by Guy Fawkes failed in their plan to kill the Protestant king with a bomb in the Houses of Parliament. This is the origin of the Bonfire Night celebration on the 5th November, when people in Great Britain set off fireworks at home or in special displays.",
  },
  {
    id: "548",
    question:
      "What was the biggest source of employment in Britain before the 18th century?",
    answer:
      "Before the 18th century, agriculture was the biggest source of employment in Britain.",
  },
  {
    id: "549",
    question:
      "The UK continues to be a world leader in the development and manufacture of motor-sport technology: True or False",
    answer:
      "There is a long history of motor sport in the UK, for both cars and motor cycles. Motor-car racing in the UK started in 1902. The UK continues to be a world leader in the development and manufacture of motor-sport technology.",
  },
  {
    id: "550",
    question: "What British artist was awarded the Turner Prize?",
    answer: "Damien Hirst.",
  },
  {
    id: "551",
    question:
      "In the UK, Members of the Parliament (MPs) are elected on the basis of:",
    answer:
      "MPs are elected through a system called ‘first past the post’. In constituency, the candidate who gets the most votes is elected.",
  },
  {
    id: "552",
    question: "Television programs in Northern Ireland",
    answer:
      "There are programmes specific to Northern Ireland and some programmes broadcast in Irish Gaelic.",
  },
  {
    id: "553",
    question:
      "In the second half of the 19th century there was an important group of artists who painted detailed pictures on religious or literary themes in bright colours. These were known as:",
    answer:
      "The Pre-Raphaelites were an important group of artists in the second half of the 19th century. They painted detailed pictures on religious or literary themes in bright colours. The group included Holman Hunt, Dante Gabriel Rossetti and Sir John Millais.",
  },
  {
    id: "554",
    question: "What was the population of the UK in 1901?",
    answer: "The population of the UK in 1901 was 40 million people.",
  },
  {
    id: "555",
    question: "People in the UK do NOT have to pay tax on:",
    answer:
      "People in the UK do not have to pay tax on Income from expensive gifts. They have to pay tax on their income, which includes: wages from paid employment, profits from self-employment, taxable benefits, pensions and income from property, savings and dividends.",
  },
  {
    id: "556",
    question:
      "Which British scientist co-invented the MRI (magnetic resonance imaging) scanner?",
    answer:
      "Sir Peter Mansfield (1933-), a British scientist, is the co-inventor of the MRI (magnetic resonance imaging) scanner. This enables doctors and researchers to obtain exact and non-invasive images of human internal organs and has revolutionised diagnostic medicine.",
  },
  {
    id: "557",
    question:
      "Which political party called a referendum on the UK’s membership of the European Union?",
    answer:
      "The Conservative government called a referendum on the UK’s membership of the European Union.",
  },
  {
    id: "558",
    question:
      "Name a UNESCO World Heritage Site and a popular area for walkers?",
    answer:
      "Parts of Hadrian’s Wall, including the forts of Housesteads and Vindolanda is a popular area for walkers and is a UNESCO (United Nations Educational Scientific and Cultural Organization) World Heritage Site.",
  },
  {
    id: "559",
    question:
      "Which charity works for the preservation of buildings in England?",
    answer:
      "In the UK, many parts of the countryside and places of interest are kept open by the National Trust in England, Wales and Northern Ireland and the National Trust for Scotland. Both are charities that work to preserve important buildings, coastline and countryside in the UK.",
  },
  {
    id: "560",
    question:
      "What name is given to the new social classes that appeared after the Black Death plague and who owned large areas of land?",
    answer:
      "Following the Black Death, the smaller population meant there was less need to grow cereal crops. There were labour shortages and peasants began to demand higher wages. New social classes appeared, including owners of large areas of land (later called the gentry), and people left the countryside to live in the towns. In the towns, growing wealth led to the development of a strong middle class.",
  },

  {
    id: "561",
    question:
      "Which was one of the most famous battles of the Hundred Years War?",
    answer:
      "One of the most famous battles of the Hundred Years War was the Battle of Agincourt in 1415, where King Henry V’s vastly outnumbered English army defeated the French. The English left France in the 1450s. English kings fought a long war with France, called the Hundred Years War (even though it actually lasted 116 years). The war was fought over the English claim to the French throne and control of the English Channel.",
  },
  {
    id: "562",
    question:
      "During the Middle Ages, England was an important trading nation and people came to England from abroad to trade and also to work. Where did the engineers come from?",
    answer:
      "During the Middle Ages, people came to England from abroad to trade and also to work. Many had special skills, such as weavers from France, engineers from Germany, glass manufacturers from Italy and canal builders from Holland.",
  },
  {
    id: "563",
    question:
      "Who was the captain of the English football team that won the World Cup in 1966?",
    answer:
      "Bobby Moore (1941-93) captained the English football team that won the World Cup in 1966.",
  },
  {
    id: "564",
    question: "Membership to the Commonwealth is compulsory for its members:",
    answer: "False. Membership to the Commonwealth is voluntary.Bangladesh, Ghana, Cyprus, Sierra Leone, Swaziland, Trinidad & Tobago, Dominica, Nauru are members of the Commonwealth.",
  },
  {
    id: "565",
    question: "How many verdicts are possible in trials in Scotland?",
    answer:
      "The jury has to listen to the evidence presented at the trial and then decide a verdict of ‘guilty’ or ‘not guilty’ based of what they have heard. In Scotland, a third verdict of ‘not proven’ is also possible.",
  },
  {
    id: "566",
    question: "How many wives did Henry VIII have?",
    answer: "Henry VIII had six wives.",
  },
  {
    id: "567",
    question: "What is the responsibility of the Home Secretary?",
    answer:
      "The Home Secretary is responsible for crime, policing and immigration.",
  },
  {
    id: "568",
    question: "Which sport can be traced as far back as the Roman times?",
    answer:
      "There is a very long history of horse racing in Britain, with evidence of events taking place as far back as Roman times.",
  },
  {
    id: "569",
    question:
      "When did the English become the preferred language of the royal court and Parliament?",
    answer:
      "By 1400, in England, official documents were being written in English, and English had become the preferred language of the royal court and Parliament.",
  },
  {
    id: "570",
    question: "When is St Andrews Day, patron saint of Scotland?",
    answer:
      "St Andrews Day, patron saint of Scotland, is celebrated on the 30th of November.",
  },
  {
    id: "571",
    question: "Which organisation has been organising ‘The Proms’ since 1927?",
    answer:
      "The Proms is an eight-week summer season of orchestral classical music that takes place in various venues, including the Royal Albert Hall in London. It has been organised by the British Broadcasting Corporation (BBC) since 1927.",
  },
  {
    id: "572",
    question:
      "Which organisation has no power to make laws but draws up conventions and charters, including the European Convention on Human Rights and Fundamental Freedoms?",
    answer:
      "The Council of Europe is responsible for the protection and promotion of human rights in those countries. It has no power to make laws but draws up conventions and charters, the most well-known of which is the European Convention on Human Rights and Fundamental Freedoms, usually called the European Convention on Human Rights.",
  },
  {
    id: "573",
    question: "Where is Snowdonia National Park located?",
    answer: "Snowdonia is a national park in North Wales.",
  },
  {
    id: "574",
    question:
      "What actions did Henry VII take after his victory in the Wars of the Roses?",
    answer:
      "After his victory in the Wars of the Roses, Henry VII wanted to make sure that England remained peaceful and that his position as king was secure. He deliberately strengthened the central administration of England and reduced the power of the nobles. He also married Elizabeth of York, the daughter of Edward IV, to unite the two warring families.",
  },
  {
    id: "575",
    question:
      "Which Court deals with the most serious civil cases in Scotland?",
    answer:
      "More serious civil cases – for example, when a large amount of compensation is being claimed – are dealt with in the High Court of England, Wales and Northern Ireland. In Scotland, they are dealt with in the Court of Session in Edinburgh.",
  },
  {
    id: "576",
    question:
      "The leader of the opposition leads his or her party in pointing out what they see as the government’s ",
    answer:
      "The leader of the opposition leads his or her party in pointing out what they see as the government’s failures and weaknesses.",
  },
  {
    id: "577",
    question: "Who became Prime Minister of the UK in May 2010?",
    answer:
      "In May 2010, and for the first time in the UK since February 1974, no political party won an overall majority in the General Election. The Conservative and Liberal Democrat parties formed a coalition and the leader of the Conservative Party, David Cameron, became Prime Minister.",
  },
  {
    id: "578",
    question:
      "The Reform Act of 1832 abolished the old pocket and rotten boroughs. True or False?",
    answer: "True. The Reform Act of 1832 had greatly increased the number of people with the right to vote. The act also abolished the old pocket and rotten boroughs and more parliamentary seats were given to the towns and cities.",
  },

  {
    id: "579",
    question: "What is the minimum age requirement to drive a moped in the UK?",
    answer:
      "You need to be at least 16 years old to ride a moped, and there are other age requirements and special tests for driving large vehicles.",
  },
  {
    id: "580",
    question:
      "Great Britain refers only to England, Scotland and Wales, not to Northern Ireland. True or False?",
    answer: "True.",
  },
  {
    id: "581",
    question:
      "Northern Ireland and Scotland have their own banknotes, which are valid everywhere in the UK. However, shops and businesses do not have to accept them. True or False?",
    answer: "True.",
  },
  {
    id: "582",
    question: "What is donated blood used for?",
    answer:
      "Donated blood is used by hospitals to help people with a wide range of injuries and illnesses.",
  },
  {
    id: "583",
    question: "How often are the general elections held in the UK?",
    answer:
      "MPs are elected at a General Election, which is held at least every five years.",
  },
  {
    id: "584",
    question: "Where is the Grand National horse racing event celebrated?",
    answer:
      "The Grand National horse racing event is celebrated in Aintree near Liverpool.",
  },
  {
    id: "585",
    question: "What was Charles Chaplin famous for?",
    answer:
      "Sir Charles (Charlie) Chaplin became famous in silent movies for his tramp character and was one of many British actors to make a career in Hollywood.",
  },
  {
    id: "586",
    question:
      "What percentage of the British population has a parent or grandparent born outside of the UK as a result of post-war immigration?",
    answer:
      "Post-war immigration means that nearly 10% of the population has a parent or grandparent born outside the UK.",
  },
  {
    id: "587",
    question: "Who is the author of the famous play ‘Macbeth’?",
    answer: "Macbeth is a famous play by William Shakespeare.",
  },
  {
    id: "588",
    question: "What is NOT a function of the House of Lords?",
    answer:
      "The House of Lords can suggest amendments or propose new laws, which are then discussed by MPs. The House of Lords checks laws that have been passed by the House of Commons to ensure they are fit for purpose. It also holds the government to account to make sure that it is working in the best interests of the people. They cannot cancel existing laws.",
  },
  {
    id: "589",
    question:
      "Which of the following is NOT a World Heritage Site? The London Eye, Stonehenge, The forts of Housesteads and Vindolanda,The Houses of Parliament",
    answer: "The London Eye is not a World Heritage Site. The London Eye was originally built as part of the UK’s celebration of the new millennium and continues to be an important part of New Year celebrations.",
  },
  {
    id: "590",
    question:
      "Which famous murder-mystery play has been running in the west end since 1952 and has had the longest initial run of any show in history?",
    answer: "",
  },
  {
    id: "591",
    question: "When was the Giant’s Causeway formed?",
    answer:
      "The Giant’s Causeway was formed about 50 million years ago. Located on the north-east coast of Northern Ireland, the Giant’s Causeway is a land formation of columns made from volcanic lava.",
  },
  {
    id: "592",
    question:
      "What British writer created the fictional detective Sherlock Holmes?",
    answer:
      "Sir Arthur Conan Doyle was a Scottish doctor and writer. He was best known for his stories about Sherlock Holmes, who was one of the first fictional detectives.",
  },
  {
    id: "593",
    question: "How can you visit the Senedd?",
    answer:
      "To book guided tours or seats in the public galleries for the Senedd you can contact the Senedd Booking Service on 0300 200 6565, email contact@senedd.wales or visit www.senedd.wales for an online booking form.",
  },
  {
    id: "594",
    question: "How were Elizabeth I and ‘Mary, Queen of Scots’ related?",
    answer: "‘Mary, Queen of Scots’ was Elizabeth I’s cousin.",
  },
  {
    id: "595",
    question: "The Middle Ages were:",
    answer:
      "The Middle Ages (or the medieval period) was a time of almost constant war.",
  },
  {
    id: "596",
    question: "What does the NATO stand for?",
    answer: "NATO stands for The North Atlantic Treaty Organisation.",
  },
  {
    id: "597",
    question: "What characterised the people from the Bronze Age?",
    answer:
      "The people of the Bronze Age were accomplished metalworkers who made many beautiful objects in bronze and gold, including tools, ornaments and weapons.",
  },

  {
    id: "598",
    question: "Where is the National Horseracing Museum located?",
    answer: "The National Horseracing Museum is located in Newmarket, Suffolk.",
  },
  {
    id: "599",
    question: "In which matters the Scottish Parliament CANNOT legislate?",
    answer:
      "The matters on which the Scottish Parliament can legislate include: civil and criminal law, health, education, planning and additional tax-raising powers. Cannot legislate on Immigration.",
  },
  {
    id: "600",
    question:
      "Which  is a popular showcase of mainly theatre and comedy performances and the biggest and most well-known festival that takes place during the Edinburgh Festival?",
    answer:
      "The Fringe is a showcase of mainly theatre and comedy performances. It often shows experimental work.The biggest and most well-known being the Edinburgh Festival Fringe.",
  },
  {
    id: "601",
    question: "Who defeated the French at the battle of Agincourt in 1415?",
    answer:
      "One of the most famous battles of the Hundred Years War was the Battle of Agincourt in 1415, where King Henry V’s vastly outnumbered English army defeated the French. English kings fought a long war with France, called the Hundred Years War (even though it actually lasted 116 years).",
  },
  {
    id: "602",
    question:
      "Which is the most famous tennis tournament hosted in Britain and which takes place each year at the All England Lawn Tennis and Croquet Club?",
    answer:
      "The most famous tournament hosted in Britain is The Wimbledon Championships, which takes place each year at the All England Lawn Tennis and Croquet Club.",
  },
  {
    id: "603",
    question:
      "What is the minimum age required for a citizen to stand for public office?",
    answer:
      "Most citizens of the UK, the Irish republic or the Commonwealth aged 18 or over can stand for public office. There are some exceptions, including: members of the armed forces, civil servants and people found guilty of certain criminal offences. ",
  },
  {
    id: "604",
    question:
      "Who makes sure that the opposition has a guaranteed amount of time to debate issues which it chooses during political debates?",
    answer:
      "The Speaker keeps order during political debates to make sure the rules are followed. This includes making sure the opposition has a guaranteed amount of time to debate issues which it chooses.",
  },
  {
    id: "605",
    question:
      "Citizens of Liechtenstein can drive in the UK for as long as their driving license is valid: True or False?",
    answer:
      "If your driving licence if from a country in the European Union (EU), Iceland, Liechtenstein or Norway, you can drive in the UK for as long as your licence is valid.",
  },
  {
    id: "606",
    question:
      "Which British Prime Minister nationalized major industries including coal and steel?",
    answer:
      "Clement Attlee’s government undertook the nationalisation of major industries (like coal and steel), created the National Health Service and implemented many of Beveridge’s plans for a stronger welfare state. Attlee also introduced measures to improve the conditions of workers. Clement Attlee was Prime Minister from 1945 to 1951 and led the Labour Party for 20 years.",
  },
  {
    id: "607",
    question:
      "What is the money raised from the Income Tax used for in the UK?",
    answer:
      "Money raised from income tax pays for government services such as roads, education, police and the armed forces.",
  },
  {
    id: "608",
    question:
      "What name is given to the clock tower at the Houses of Parliament in honour of Queen Elizabeth II’s Diamond Jubilee in 2012?",
    answer:
      "The clock tower at the Houses of Parliament in London is named ‘Elizabeth Tower’ in honour of Queen Elizabeth II’s Diamond Jubilee in 2012.",
  },
  {
    id: "609",
    question: "Whose details are NOT listed in the Phone Book?",
    answer:
      "MPs, Senedd members (SMs) and members of the Scottish Parliament (MSPs) are also listed in The Phone Book, published by BT. The King is not.",
  },
  {
    id: "610",
    question:
      "Which of the following words comes from the Norman French? Apple, Beauty, Cow, Summer",
    answer:
      "Some words in modern English – for example, ‘park’ and ‘beauty’ – are based on Norman French words.",
  },
  {
    id: "611",
    question:
      "Catherine Parr, the sixth wife of Henry VIII, was a cousin of Anne Boleyn: True or False?",
    answer: "False. Catherine Howard was a cousin of Anne Boleyn.",
  },
  {
    id: "612",
    question:
      "Who deals with cases involving personal injury, family matters, breaches of contract and divorce in Scotland?",
    answer:
      "County Courts deal with a wide range of civil disputes. These include people trying to get back money that is owed to them, cases involving personal injury, family matters, breaches of contract, and divorce. In Scotland, most of these matters are dealt with in the Sheriff Court.",
  },
  {
    id: "613",
    question: "What was the symbol of York during the Wars of the Roses?",
    answer: "The symbol of York during the Wars of the Roses was a white rose.",
  },
  {
    id: "614",
    question:
      "During which movement the Parliament passed laws giving women the right to equal pay and made it illegal for employees to discriminate against women because of their gender:",
    answer:
      "The Swinging Sixties was a time when the Parliament passed new laws giving women the right to equal pay and made it illegal for employers to discriminate against women because of their gender.",
  },
  {
    id: "615",
    question: "What name is given to the members of the House of Lords?",
    answer:
      "Members of the House of Lords, known as peers, are not elected by the people and do not represent a constituency.",
  },
  {
    id: "616",
    question:
      "Where can you find a statue of Boudicca, the queen of the Iceni and one of the tribal leaders who fought against the Romans?",
    answer:
      "There is a statue of Boudicca, the queen of the Iceni, on Westminster Bridge in London, near the Houses of Parliament.",
  },

  {
    id: "617",
    question:
      "For how long was Britain a republic under the leadership of Oliver Cromwell? ",
    answer:
      "Britain was a republic under the leadership of Oliver Cromwell for 11 years.When Cromwell died, his son, Richard, became Lord Protector in his place but was not able to control the army or the government",
  },
  {
    id: "618",
    question: "Magistrates and Justices of the Peace (JPs) are members of:",
    answer:
      "Magistrates and Justices of the Peace (JPs) are members of the local community. In England, Wales and Scotland Magistrates and Justices of the Peace (JPs) usually work unpaid and do not need legal qualifications.",
  },
  {
    id: "619",
    question: "Which British explorer mapped the coast of Australia?",
    answer:
      "Captain James Cook mapped the coast of Australia and a few colonies were established there.",
  },
  {
    id: "620",
    question: "How many members does a jury have in Scotland?",
    answer:
      "In England, Wales and Northern Ireland a jury has 12 members, and in Scotland a jury has 15 members.",
  },
  {
    id: "621",
    question: "Who can get a 50% discount on their TV licences?",
    answer:
      "People over 75 can apply for a free TV licence and blind people can get a 50% discount.",
  },
  {
    id: "622",
    question: "Which British city is famous for its celebration of Diwali?",
    answer: "There is a famous celebration of Diwali in Leicester.",
  },
  {
    id: "613",
    question:
      "Which of the following British actresses has NOT won an Oscar? Tilda Swinton, Dame Judi Dench, Emily Watson, Kate Winslet",
    answer:
      "Recent British actors to have won Oscars include Colin Firth, Sir Antony Hopkins, Dame Judi Dench, Kate Winslet and Tilda Swinton. Emily Watson has not won an oscar.",
  },
  {
    id: "614",
    question:
      "Which of the following sports has a long association with royalty? Rugby, Horse racing,Formula 1, Sailing",
    answer: "Horse racing has a long association with royalty.",
  },
  {
    id: "615",
    question:
      "What were the main occupations of the people during the Iron Age?",
    answer:
      "During the Iron Age most people were farmers, craft workers or warriors.",
  },
  {
    id: "616",
    question: "When is the electoral register updated?",
    answer: "September or October",
  },
  {
    id: "617",
    question: "Which is the official church of the state?",
    answer:
      "The official Church of the state is the Church of England (called the Anglican Church in other countries and the Episcopal Church in Scotland and the United States).",
  },
  {
    id: "618",
    question:
      "Who became one of the most popular monarchs in English history, particularly after 1588, when the English defeated the Spanish Armada?",
    answer:
      "Elizabeth I became one of the most popular monarchs in English history, particularly after 1588, when the English defeated the Spanish Armada (a large fleet of ships), which had been sent by Spain to conquer England and restore Catholicism.",
  },
  {
    id: "619",
    question: "What was the population of the UK in 1700?",
    answer: "The population of the UK in 1700 was 5 million people.",
  },
  {
    id: "620",
    question: "When did the ‘Concorde’ aircraft retired from service?",
    answer: "In 2003",
  },
  {
    id: "621",
    question:
      "When did the Allies defeat Germany marking the end of the Second World War?",
    answer:
      "Following victory on the beaches of Normandy, the allied forces pressed on through France and eventually into Germany. The Allies comprehensively defeated Germany in May 1945.",
  },
  {
    id: "622",
    question:
      "How many square miles does Loch Lomond and the Trossachs National Park cover?",
    answer:
      "Loch Lomond and the Trossachs National Park covers 720 square miles (1,865 square kilometres) in the west of Scotland. Loch Lomond is the largest expanse of fresh water in mainland Britain and probably the best-known part of the park",
  },
  {
    id: "623",
    question:
      "Which British athlete won 16 medals, including 11 gold medals, in races over five Paralympic Games?",
    answer:
      "Baroness Tanni Grey-Thompson (1969-) is an athlete who uses a wheelchair and won 16 Paralympic medals, including 11 gold medals, in races over five Paralympic Games. She won the London Marathon six times and broke a total of 30 world records.",
  },
  {
    id: "624",
    question: "What is the capital city of Scotland?",
    answer: "The capital city of Scotland is Edinburgh.",
  },
  {
    id: "625",
    question:
      "What British sportsmen holds a number of English Test cricket records?",
    answer:
      "Sir Ian Botham (1955-) captained the English cricket team and holds a number of English Test cricket records, both for batting and for bowling.",
  },

  {
    id: "626",
    question:
      "During the Middle Ages, England was an important trading nation and people came to England from abroad to trade and also to work. Where did the weavers come from?",
    answer:
      "During the Middle Ages, people came to England from abroad to trade and also to work. Many had special skills, such as weavers from France, engineers from Germany, glass manufacturers from Italy and canal builders from Holland.",
  },
  {
    id: "627",
    question:
      "What was the name of Sir Francis Drake’s ship and which was one of the first to sail around the world?",
    answer:
      "Sir Francis Drake, one of the commanders in the defeat of the Spanish Armada, was one of the founders of England’s naval tradition. His ship, the Golden Hind, was one of the first to sail right around (‘circumnavigate’) the world.",
  },
  {
    id: "628",
    question: "Why did Henry VIII marry Anne of Cleves?",
    answer:
      "Henry married Anne of Cleves, was a German princess,for political reasons but divorced her soon after.",
  },
  {
    id: "629",
    question:
      "How many Formula 1 Grand Prix events are held in the UK every year?",
    answer:
      "A Formula 1 Grand Prix event is held in the UK each year and a number of British Grand Prix drivers have won the Formula 1 World Championship.",
  },
  {
    id: "630",
    question: "How can you visit the UK Parliament?",
    answer:
      "To visit the UK Parliament, you can write to your local MP in advance to ask for tickets or you can Queue on the day at the public entrance.",
  },
  {
    id: "631",
    question:
      "How many American colonies declared their independence in 1776, stating that people had a right to establish their own governments?",
    answer:
      "In 1776, 13 American colonies declared their independence, stating that people had a right to establish their own governments.",
  },
  {
    id: "632",
    question:
      "Which TWO words come from the Viking language? Grimsby,Scunthorpe,Thunderstorm,Butterfly",
    answer:
      "Many of the Viking invaders stayed in Britain – especially in the east and north of England in an area known as the Danelaw (many place names there, such as Grimsby and Scunthorpe come from the Viking languages).",
  },
  {
    id: "633",
    question: "How is the Speaker elected?",
    answer: "The Speaker is chosen by other MPs in a secret ballot.",
  },
  {
    id: "634",
    question:
      "Throughout the 1990s, Britain played a leading role in coalition forces involved in the liberation of Kuwait, following the Iraqi invasion in 1990, and the conflict in the former Republic of Yugoslavia: True or False?",
    answer: "True.",
  },
  {
    id: "635",
    question:
      "The ‘swinging sixties’ was a period of significant social change and it was known for its growth in:",
    answer:
      "The decade of the 1960s was a period of significant social change. It was known as the ‘swinging sixties’. There was growth in British fashion, cinema and popular music.",
  },
  {
    id: "636",
    question:
      "What is the name given to the system used to deal with children and young people who have committed an offence in Scotland?",
    answer:
      "In Scotland a system called the Children’s Hearings System is used to deal with children and young people who have committed an offence.",
  },
  {
    id: "637",
    question:
      "Which prehistoric village located in northern Europe has helped archaeologists to understand more about how people live near the end of the Stone Age?",
    answer:
      "Skara Brae on Orkney, off the north coast of Scotland, is the best preserved prehistoric village in northern Europe, and has helped archaeologists to understand more about how people lived near the end of the Stone Age.",
  },
  {
    id: "638",
    question:
      "During the Middle Ages, a Parliament was developed in Scotland, which had three Houses called Estates. These were:",
    answer:
      "The Parliament developed in Scotland in the Middle Ages had three Houses, called Estates: the lords, the commons and the clergy.",
  },
  {
    id: "639",
    question:
      "Which landscape architect designed grounds around country houses so that the landscape appeared to be natural, with grass, trees and lakes?",
    answer:
      "In the 18th century, Lancelot ‘Capability’ Brown designed the grounds around country houses so that the landscape appeared to be natural, with grass, trees and lakes. He often worked with Edwin Lutyens to design colourful gardens around the houses he designed.",
  },
  {
    id: "640",
    question:
      "Which of the following scientific discoveries helped the progress of the Industrial Revolution? Penicillin,  The aeroplane, Steam power, The lightbulb ",
    answer:
      "Scientific discoveries, such as James Watt’s work on steam power, helped the progress of the Industrial Revolution.",
  },
  {
    id: "641",
    question: "Who were the parents of Elizabeth I?",
    answer: "Henry VIII and Anne Boleyn were the parents of Elizabeth I.",
  },
  {
    id: "642",
    question: "The Isle of Man is a Crown dependency. True or False?",
    answer: "True.",
  },
  {
    id: "643",
    question:
      "Which of the following charities works for the prevention of cruelty to children?",
    answer:
      "The NSPCC is the National Society for the Prevention of Cruelty to Children.",
  },
  {
    id: "644",
    question: "When did motor-car racing start in the UK?",
    answer: "Motor-car racing in the UK started in 1902.",
  },

  {
    id: "645",
    question:
      "The Commonwealth is based on the core values of democracy, good government and the rule of law: True or False?",
    answer: "True.",
  },
  {
    id: "646",
    question: "How long does it take to donate blood?",
    answer: "Giving blood only takes about an hour to do.",
  },
  {
    id: "647",
    question: "When did the post-war economic boom come to an end?",
    answer: "In the late 1970s, the post-war economic boom came to an end.",
  },
  {
    id: "648",
    question:
      "During its government, Margaret Thatcher made structural changes to the economy through the privatisation of nationalised industries and imposed legal controls on trade union powers: True or False?",
    answer:
      "True. Margaret Thatcher made structural changes to the economy through the privatisation of nationalised industries and imposed legal controls on trade union powers.",
  },
  {
    id: "649",
    question: "Who sat at the House of Commons during the Middle Ages?",
    answer:
      "In the Middle Ages, Knights, who were usually smaller landowners, and wealthy people from towns and cities were elected to sit in the House of Commons.",
  },
  {
    id: "650",
    question: "Which words come from the Anglo-Saxon language? ",
    answer: "The words ‘Apple’ and ‘summer’ are based on Anglo-Saxon words.",
  },
  {
    id: "651",
    question: "Where do local authorities get funding from",
    answer:
      "Local authorities provide a range of services in their areas. They are funded by money from central government and by local taxes.",
  },
  {
    id: "652",
    question: "If you are self-employed:",
    answer:
      "If you are self-employed, you need to pay your own tax through a system called ‘self-assessment’, which includes completing a tax return.",
  },
  {
    id: "653",
    question:
      "What name is given to the elected members of the Northern Ireland Assembly?",
    answer:
      "Members of the Northern Ireland Assembly are known as MLAs (members of the Legislative Assembly).",
  },
  {
    id: "654",
    question:
      "Which of the following areas did the British Empire NOT cover during the Victorian period? Mexico, Australia, India, Large parts of Africa",
    answer:
      "During the Victorian period, the British Empire grew to cover all of India, Australia and large parts of Africa.",
  },
  {
    id: "655",
    question:
      "What percentage of the total British population is located in Wales?",
    answer: "The total British population located in Wales is around 5%.",
  },
  {
    id: "656",
    question: "Which British scientist led the development of the atomic bomb?",
    answer:
      "Scientists led by Ernest Rutherford, working at Manchester and then Cambridge University, were the first to ‘split the atom’ and took part in the Manhattan Project in the United States, which developed the atomic bomb. The Manhattan project was the name of the project through which the atomic bomb was developed",
  },
  {
    id: "657",
    question:
      "Which movie played an important role in boosting morale during the Second World War? ",
    answer:
      "During the Second World War, British movies (for example, In Which We Serve) played an important part in boosting morale.",
  },
  {
    id: "658",
    question: "Who won the 2012 Olympic gold medal in heptathlon?",
    answer:
      "Jessica Ennis (1986-) won the 2012 Olympic gold medal in the heptathlon, which includes seven different track and field events. She also holds a number of British athletics records.",
  },
  {
    id: "659",
    question:
      "What is the name of the annual cultural Welsh festival which includes music, dance, art and original performances largely in Welsh?",
    answer:
      "The National Eisteddfod of Wales is an annual cultural festival which includes music, dance, art and original performances largely in Welsh. It includes a number of important competitions for Welsh poetry.",
  },
  {
    id: "660",
    question: "What is the most well-known rugby league (club) competition?",
    answer:
      "The Super League is the most well-known rugby league (club) competition.There are two different types of rugby, which have different rules: union and league. Rugby union is the most popular type of rugby in Wales, Scotland and Ireland, while rugby league is more popular in the north of England. Rugby originated in England in the early 19th century and is very popular in the UK today.",
  },
  {
    id: "661",
    question:
      "How old was the Queen of Scotland, Mary Stuart, when she became queen?",
    answer:
      "The queen of Scotland, Mary Stuart (often now called ‘Mary, Queen of Scots’) was a Catholic. She was only a week old when her father died and she became queen. Mary Stuart, the Queen of Scotland, spent most of her childhood in France.",
  },

  {
    id: "662",
    question: "Where was the first tennis club founded?",
    answer: "The first tennis club was founded in Leamington Spa in 1872.",
  },
  {
    id: "663",
    question:
      "Which British playwright invented many common English words and had a great influence on the English language?",
    answer:
      "William Shakespeare had a great influence on the English language and invented many words that are still common today.",
  },
  {
    id: "664",
    question:
      "Which famous poem tells the story of the knights at the court of King Arthur?",
    answer:
      "Poems which survive from the Middle Ages include Chaucer’s Canterbury Tales and a poem called Sir Gawain and the Green Knight, about one of the knights at the court of King Arthur.",
  },
  {
    id: "665",
    question: "Which flower is associated with Northern Ireland?",
    answer: "The shamrock is the flower associated with Northern Ireland.",
  },
  {
    id: "666",
    question:
      "The longest distance on the mainland in the UK is from John O’Groats on the north coast of Scotland to a place in the south-west corner of England known as:",
    answer:
      "The longest distance on the mainland is from John O’Groats on the north coast of Scotland to Land’s End in the south-west corner of England. It is about 870 miles (approximately 1,400 kilometres).",
  },
  {
    id: "667",
    question:
      "Who wrote a famous series of poems about a group of people going to Canterbury on a pilgrimage known as ‘The Canterbury Tales’?",
    answer:
      "In the years leading up to 1400, Geoffrey Chaucer wrote a series of poems in English about a group of people going to Canterbury on a pilgrimage. The people decided to tell each other stories on the journey, and the poems describe the travellers and some of the stories they told. This collection of poems is called The Canterbury Tales.",
  },
  {
    id: "668",
    question:
      "Which of the following categories is recognised at the Laurence Olivier Awards? Music, Theatre, Sport, Literature",
    answer:
      "The Laurence Olivier Awards recognise achievements in the area of theatre.",
  },
  {
    id: "669",
    question:
      "In the UK, there is a National Lottery for which draws are made every day. True or False.",
    answer:
      "In the UK, there is a National Lottery for which draws are made every week.",
  },
  {
    id: "670",
    question: "Where is Europe’s longest dry ski slope located?",
    answer:
      "There are five ski centres in Scotland, as well as Europe’s longest dry ski slope near Edinburgh.",
  },
  {
    id: "671",
    question:
      "Which TWO of Henry VIII’s wives were accused of taking lovers and executed?",
    answer:
      "Anne Boleyn and Catherine Howard were accused of taking lovers and executed. Anne Boleyn was executed at the tower of London.",
  },
  {
    id: "672",
    question: "What was the population of the UK in 1600?",
    answer: "The population of the UK in 1600 was just over 4 million people.",
  },
  {
    id: "673",
    question:
      "In which of the following languages is the life in the UK test NOT available? English, Scottish Gaelic, French, Welsh ",
    answer:
      "The Life in the UK test is usually taken is English, although special arrangements can be made if you wish to take it in Welsh or Scottish Gaelic.",
  },
  {
    id: "674",
    question: "When was St Pancras Station built?",
    answer: "St Pancras Station was built in the 19th century.",
  },
  {
    id: "675",
    question: "Which TWO soap operas are popular in the UK?",
    answer:
      "Popular programmes in the UK include regular soap operas such as Coronation Street and EastEnders.",
  },
  {
    id: "676",
    question: "Who was the first king of the House of Tudor?",
    answer: "Henry VII (Henry Tudor) was the first king of the House of Tudor.",
  },
  {
    id: "677",
    question:
      "What do Lewis Hamilton, Jenson Button and Damon Hill have in common?",
    answer:
      "Lewis Hamilton, Jenson Button and Damon Hill have won the Formula 1 World Championship.",
  },
  {
    id: "678",
    question:
      "According to the 2011 Census, what percentage of people said that they had no religion?",
    answer:
      "According to the 2011 census, 25% of people said they had no religion",
  },
  {
    id: "679",
    question:
      "What other name is given to Diwali, the religious celebration that celebrates the victory of good over evil and the gaining of knowledge?",
    answer:
      "Diwali normally falls in October or November and lasts for five days. It is often called the Festival of Lights.",
  },
  {
    id: "670",
    question:
      "In Wales, the jury has to listen to the evidence presented at the trial and then decide a verdict of ‘guilty’, ‘not guilty’ or ‘not proven’ based of what they have heard: True or False ",
    answer:
      "False. The jury has to listen to the evidence presented at the trial and then decide a verdict of ‘guilty’ or ‘not guilty’ based of what they have heard. In Scotland, a third verdict of ‘not proven’ is also possible.",
  },

  {
    id: "671",
    question:
      "A National Insurance number does on its own prove to an employer that you have the right to work in the UK: True or False",
    answer:
      "False. A National Insurance number does not on its own prove to an employer that you have the right to work in the UK. A non-UK national living in the UK and looking for work, starting work or setting up as self-employed will need a National Insurance number. However, you can start work without one.",
  },
  {
    id: "672",
    question:
      "Which is the ceremonial role to be undertaken by the King every year?",
    answer:
      "The King has important ceremonial roles, such as the opening of the new parliamentary session each year. On this occasion the King makes a speech which summarises the government’s policies for the year ahead.The King represents the UK to the rest of the world.",
  },
  {
    id: "673",
    question:
      "How long can you use your driving licence in the UK if you have a licence from another country?",
    answer:
      "If you have a licence from another country, you may use it in the UK for up to 12 months.",
  },
  {
    id: "674",
    question:
      "What British discovery was influential in the development of computer science and the modern-day computer? ",
    answer:
      "The Turing machine is a theoretical mathematical device invented by Alan Turing (1912-54), a British mathematician, in the 1930s. The theory was influential in the development of computer science and the modern-day computer.",
  },
  {
    id: "675",
    question:
      "Which famous philosopher developed ideas about human nature during the 18th century and that have continued to influence philosophers over the years?",
    answer:
      "During the 18th century, David Hume’s ideas about human nature continue to influence philosophers.",
  },
  {
    id: "676",
    question:
      "If you are arrested and taken to a police station, a police officer should:",
    answer:
      "If you are arrested and taken to a police station, a police officer will tell you the reason for your arrest and you will be able to seek legal advice.",
  },
  {
    id: "677",
    question: "What TWO names are given to the day before Lent?",
    answer:
      "The day before Lent starts is called Shrove Tuesday, or Pancake Day.",
  },
  {
    id: "678",
    question:
      "Who wrote the music for the popular show Jesus Christ Superstar?",
    answer:
      "Andrew Lloyd Webber has written the music for shows which have been popular throughout the world, including, in collaboration with Tim Rice, Jesus Christ Superstar and Evita, and also Cats and The Phantom of the Opera.",
  },
  {
    id: "679",
    question: "What did the Chartists campaign for?",
    answer:
      "The Chartists campaigned for every man to have the vote, elections every year, for all regions to be equal in the electoral system, secret ballots, for any man to be able to stand as an MP and for MPs to be paid The Chartists, demanded the vote for the working classes and other people without property.",
  },
  {
    id: "680",
    question: "When did King Charles III start reining?",
    answer: "The King has reigned since his mother’s death in September 2022.",
  },
  {
    id: "681",
    question:
      "What is the name of the land formation consisting of columns made of volcanic lava located on the north-east coast of Northern Ireland?",
    answer:
      "Located on the north-east coast of Northern Ireland, the Giant’s Causeway is a land formation of columns made from volcanic lava. The Giant’s Causeway was formed about 50 million years ago. ",
  },
  {
    id: "682",
    question:
      "Members of the public are not allowed in Youth Courts, and the name or photographs of the accused young person cannot be published in newspapers or used by the media: True or False",
    answer: "True.",
  },
  {
    id: "683",
    question:
      "A set of principles by which a country is governed and which includes all of the institutions that are responsible for running the country and how their power is kept in check is the definition for:",
    answer:
      "A constitution is a set of principles by which a country is governed. It includes all of the institutions that are responsible for running the country and how their power is kept in check.",
  },
  {
    id: "684",
    question:
      "Who invented the cash-dispensing ATM (automatic teller machine) or ‘cashpoint’?",
    answer:
      "In the 1960s, James Goodfellow (1937-) invented the cash-dispensing ATM (automatic teller machine) or ‘cashpoint’. The first of these was put into use by Barclays Bank in Enfield, north London in 1967.",
  },
  {
    id: "685",
    question:
      "What name is given to the candelabrum lit during the eight-day holiday of Hanukkah?",
    answer:
      "Hanukkah is in November or December and is celebrated for eight days. On each day of the festival a candle is lit on a stand of eight candles (called a menorah) to remember the story of the festival, where oil that should have lasted only a day did so for eight.",
  },
  {
    id: "686",
    question:
      "It is against the law to treat a pet cruelly or to neglect it. True or false",
    answer: "True",
  },
  {
    id: "687",
    question:
      "Drinking in public can be a criminal offence and you can be fined or arrested for it:",
    answer:
      "Drinking in public: some places have alcohol-free zones where you cannot drink in public. The police can also confiscate alcohol or move young people on from public places. You can be fined or arrested.",
  },
  {
    id: "688",
    question: "What was the most spoken language during the Iron Age?",
    answer:
      "The language spoken during the Iron Age was part of the Celtic language family.",
  },
  {
    id: "689",
    question: "When did Henry VIII die?",
    answer: "Henry VIII died on the 28th of January 1547.",
  },

  {
    id: "689",
    question:
      "‘The darling buds of May’ is a line from William Shakespeare’s play Sonnet 18 – Shall I Compare Thee To A Summer’s Day. True or False?",
    answer: "True.",
  },
  {
    id: "690",
    question:
      "The queen of Scotland, Mary Stuart (often now called ‘Mary, Queen of Scots’) was a Catholic. True or False?",
    answer: "True.",
  },
  {
    id: "691",
    question:
      "When did Ireland become unified with England, Wales and Scotland?",
    answer:
      "At the beginning of the Middle Ages, Ireland was an independent country. In 1801, Ireland became unified with England, Scotland and Wales after the Act of Union of 1800. This created the United Kingdom of Great Britain and Ireland. The Act of Union, known as the Treaty of Union in Scotland, was therefore agreed in 1707, creating the Kingdom of Great Britain.",
  },
  {
    id: "692",
    question:
      "The devolved administrations of Wales, Scotland and Northern Ireland each have their own civil service: True or False?",
    answer: "True. ",
  },
  {
    id: "693",
    question:
      "On Remembrance Day, there is a two-minute silence at 11 AM to commemorate those who died fighting during the First World War.",
    answer:
      "On Remembrance Day at 11.00 am there is a two-minute silence and wreaths are laid at the Cenotaph in Whitehall, London.",
  },
  {
    id: "694",
    question: "Who was Henry Purcell?",
    answer:
      "Henry Purcell (1659-95) was the organist at Westminster Abbey. He wrote church music, operas and other pieces, and developed a British style distinct from that elsewhere in Europe.",
  },
  {
    id: "695",
    question: "How are life peers appointed?",
    answer:
      "Life peers are appointed by the monarch on the advice of the Prime Minister.",
  },
  {
    id: "696",
    question:
      "Who proposed that enemy aircrafts could be detected by radio waves and is responsible for the development of the radar?",
    answer:
      "The radar was developed by Scotsman Sir Robert Watson-Watt (1892-1973), who proposed that enemy aircraft could be detected by radio waves. The first successful radar test took place in 1935.",
  },
  {
    id: "697",
    question:
      "During Halloween people carve lanterns out of ______ and put a candle inside of them.",
    answer: "Pumpkins. Halloween, 31 October, is and ancient festival and has roots in the pagan festival to mark the beginning of winter.",
  },
  {
    id: "698",
    question:
      "In England, Wales and Northern Ireland, if an accused person is aged 18, the case will be heard in a Youth Court: True or False?",
    answer:
      "False. In England, Wales and Northern Ireland, if an accused person is aged 10 to 17, the case is normally heard in a Youth Court in front of up to three specially trained magistrates or a District Judge.",
  },
  {
    id: "699",
    question: "Who sat at the House of Lords during the Middle Ages?",
    answer:
      "During the Middle Ages, great landowners and bishops sat in the House of Lords.",
  },
  {
    id: "700",
    question:
      "In Scotland, some Scotland-specific programmes are shown and there is also a channel with programmes in the Gaelic language. True or False",
    answer: "True",
  },
  {
    id: "701",
    question:
      "Which of the following countries was NOT part of the Central Powers during the First World War? Germany, Serbia, Austria, Hungary ",
    answer:
      "During the First World War Serbia formed part of the Allied powers.",
  },
  {
    id: "702",
    question:
      "What is played at important national occasions and at events attended by the King or the Royal Family?",
    answer:
      "The National Anthem of the UK is ‘God Save the King’ is played at important national occasions and at events attended by the King or the Royal Family.",
  },
  {
    id: "703",
    question:
      "How can a person be protected from being forced into a marriage?",
    answer:
      "Court orders can be obtained to protect a person from being forced into a marriage, or to protect a person in a forced marriage.",
  },
  {
    id: "",
    question:
      "Unfair dismissal or discrimination in the workplace is classified as a criminal offence in the UK?",
    answer:
      "Unfair dismissal or discrimination in the workplace is classified as a civil offence.",
  },
  {
    id: "704",
    question: "When did Henry VIII start reining?",
    answer:
      "Henry VIII was king of England from 21 April 1509 until his death on 28 January 1547.",
  },
  {
    id: "705",
    question: "What is the currency in the UK?",
    answer: "The currency in the UK is the pound sterling (symbol £).There are 100 pence in a pound.",
  },
  {
    id: "706",
    question:
      "The European Council is not part of the British government. True or false",
    answer: "True",
  },

  {
    id: "707",
    question:
      "Which TWO universities compete with each other on a rowing race along the River Thames every year?",
    answer:
      "There is a popular yearly rowing race on the Thames between Oxford and Cambridge Universities.",
  },
  {
    id: "708",
    question:
      "When driving in the UK, where do you need to display the tax disc which shows that the annual road tax has been paid?",
    answer:
      "When driving in the UK, you must pay an annual road tax and display the tax disc, which shows that the tax has been paid, on the windowscreen.",
  },
  {
    id: "709",
    question: "The Lord of the Rings is a British film. True or False",
    answer: "The Lord of the Rings is not a British film.",
  },
  {
    id: "710",
    question:
      "A jury is made up of members of the public chosen at random from the local electoral register. True or False",
    answer: "True",
  },
  {
    id: "711",
    question: "When is St David’s Day, patron of Wales?",
    answer:
      "St David’s Day, patron of Wales is celebrated on the 1st of March.",
  },
  {
    id: "712",
    question:
      "What name is given to the red flowers found on the battlefields of the First World War and which people wear during Remembrance Day?",
    answer:
      "Remembrance Day people wear poppies(the red flower found on the battlefields of the First World War).",
  },
  {
    id: "713",
    question:
      "Where can you get contact details for all your representatives and their parties ",
    answer:
      "You can get contact details for all your representatives and their parties from your local library and from http://www.parliament.uk.",
  },
  {
    id: "714",
    question: "What is the Old Bailey?",
    answer:
      "The Old Bailey is probably the most famous criminal court in the world.",
  },
  {
    id: "715",
    question:
      "It is a civil offence to cause harassment, alarm or distress to someone because of their religion or ethnic origin: True or False",
    answer:
      "False. It is a criminal offence to cause harassment, alarm or distress to someone because of their religion or ethnic origin.",
  },
  {
    id: "716",
    question:
      "What is the name of the oldest continuously working film studio facility in the world?",
    answer:
      "Ealing Studios has a claim to being the oldest continuously working film studio facility in the world.",
  },
  {
    id: "717",
    question: "By which name is London’s west end known for?",
    answer: "London’s west end is also known as ‘Theatreland’.",
  },
  {
    id: "718",
    question:
      "Which of the following was one of the commanders in the defeat of the Spanish Armada and one of the founders of England’s naval tradition? Alan Turing, Sir Francis Drake, James VI of Scotland, Oliver Cromwell",
    answer:
      "Sir Francis Drake was one of the commanders in the defeat of the Spanish Armada and one of the founders of England’s naval tradition.",
  },
  {
    id: "719",
    question: "Where was William Shakespeare born?",
    answer: "William Shakespeare was born in Stratford-upon-Avon.",
  },
  {
    id: "720",
    question:
      "Which TWO islands are closely linked to the UK but are not part of it?",
    answer:
      "The Channel Islands and the Isle of Man are closely linked to the UK but are not part of it. The Isle of Man and the Channel Islands are ‘Crown dependencies’.",
  },
  {
    id: "721",
    question: "Who gave Henry VIII the son he wanted, Edward?",
    answer: "Jane Seymour gave Henry VIII the son he wanted, Edward.",
  },
  {
    id: "722",
    question:
      "The Middle Ages or medieval times relate to the time that goes from the period after the Norman Conquest until the year:",
    answer:
      "The period after the Norman Conquest up until about 1485 is called the Middle Ages (or the medieval period).",
  },
  {
    id: "723",
    question: "Who is the heir to the throne of the UK?",
    answer:
      "The King’s eldest son, Prince William (the Prince of Wales), is the heir to the throne.",
  },
  {
    id: "724",
    question: "When was Ireland divided into two countries?",
    answer:
      "In 1921 a peace treaty was signed and in 1922 Ireland became two countries.",
  },
  {
    id: "725",
    question: "Dublin is a city of the UK. True or False",
    answer: "Dublin is not a city of the UK.",
  },

  {
    id: "726",
    question: "When is Bonfire Night celebrated?",
    answer: "Bonfire Night is celebrated on the 5th of November.",
  },
  {
    id: "727",
    question:
      "What is the name of the event that refers to the 6 June 1944 when Allied Forces landed in Normandy aiming to attack Hitler’s forces in Western Europe during World War II?",
    answer:
      "‘D-Day’ refers to the 6th of June 1944, when allied forces landed in Normandy aiming to attack Hitler’s forces in Western Europe during World War II.",
  },
  {
    id: "728",
    question:
      "In the UK, many people continue to visit the countryside for holidays and for leisure activities such as walking, camping and fishing: True or False",
    answer: "True. Most people live in towns and cities but much of Britain is still countryside.",
  },
  {
    id: "729",
    question:
      "Which civilisations is known for having built roads and public buildings, creating a structure of law and having introduced new plants and animals in Britain?",
    answer:
      "The Romans remained in Britain for 400 years. They built roads and public buildings, created a structure of law, and introduced new plants and animals.",
  },
  {
    id: "730",
    question:
      "Which countries is NOT a member of the Commonwealth? Uganda, Ghana, Malawi, Zimbabwe, Costa Rica  ",
    answer: "Zimbabwe, Costa Rica is not a member of the Commonwealth.",
  },
  {
    id: "731",
    question:
      "What marked the beginning of what is called ‘constitutional monarchy’?",
    answer:
      "The laws passed after the Glorious Revolution are the beginning of what is called ‘constitutional monarchy’.",
  },
  {
    id: "732",
    question: "Who makes the decisions on government policies in the UK?",
    answer:
      "Decisions on government policies are made by the Prime Minister and cabinet.",
  },
  {
    id: "733",
    question: "Where does the most famous sailing event in the UK take place?",
    answer:
      "The most famous sailing event in the UK takes place at Cowes on the Isle of Wight.",
  },
  {
    id: "734",
    question: "How often is the electoral register updated?",
    answer:
      "The electoral register is updated every year in September or October.",
  },
  {
    id: "735",
    question: "What do you need to drive a car in the UK?",
    answer:
      "To drive a car in the UK you need a driving licence, a valid motor insurance, a MOT certificate (for cars over three years old) and the road tax. If you vehicle is over three years old, you must take it to the Ministry of Transport (MOT) test every year. You must also wear a seat belt and ensure that any passengers under 14 years of age are wearing a seat belt or using an appropriate child restraint. It is an offence not to have an MOT certificate if your vehicle is more than THREE years old or without car insurance.",
  },
  {
    id: "736",
    question:
      "The action of handing out leaflets in the street or knocking on people’s doors to ask for their political support is known as:",
    answer:
      "The action of handing out leaflets in the street or knocking on people’s doors to ask for their political support is known as canvassing.",
  },
  {
    id: "737",
    question: "Who defeated the Vikings?",
    answer: "King Alfred the Great defeated the Vikings. The Vikings came from Denmark and Norway.",
  },
  {
    id: "738",
    question: "When was Queen Elizabeth II’s Diamond Jubilee celebrated?",
    answer: "Queen Elizabeth II’s Diamond Jubilee was celebrated in 2012.",
  },
  {
    id: "739",
    question:
      "During the Middle Ages, England was an important trading nation and people came to England from abroad to trade and also to work. Where did the canal builders come from?",
    answer:
      "During the Middle Ages, England was an important trading nation and people came to England from abroad to trade and also to work. Canal builders came from Holland.",
  },
  {
    id: "740",
    question:
      "The Elizabethan period in England was a time of growing patriotism: a feeling of pride in being English, English explorers sought new trade routes and tried to expand British trade into the Spanish colonies in the Americas:",
    answer: "True",
  },
  {
    id: "741",
    question: "Which  are ‘Crown dependencies’?",
    answer: "The Isle of Man and the Channel Islands are ‘Crown dependencies’.",
  },
  {
    id: "742",
    question: "Which of the following is a charity that works with old people?",
    answer: "Age UK is a charity that works with old people.",
  },
  {
    id: "743",
    question:
      "Which popular British sport can be traced back to the 15th century?",
    answer:
      "The modern game of golf can be traced back to 15th century Scotland.",
  },
  {
    id: "744",
    question: "How many crosses form the Union Flag?",
    answer: "The Union Flag has three crosses.",
  },
  {
    id: "745",
    question: "Who were the suffragettes?",
    answer:
      "The suffragettes were a group who used civil disobedience to gain the vote for women. In 1903 Emmeline Pankhurst helped found the Women’s Social and Political Union (WSPU). This was the first group whose members were called ‘suffragettes’.",
  },
  {
    id: "746",
    question: "What does the UK offer to its permanent residents or citizens?",
    answer: "A right to a fair trial is the correct answer.",
  },
  {
    id: "747",
    question:
      "What can living people donate that may help other people with injuries or illnesses ",
    answer: "Living people can donate blood and a kidney.",
  },
  {
    id: "748",
    question: "Where is the office of the MPs located?",
    answer:
      "The MP’s office is located at The House of Commons, Westminster, London, SW1A OAA.",
  },
  {
    id: "749",
    question:
      "Which of the following days are public holidays in Scotland : 1 January, 24 December 3 January, 2 January",
    answer:
      "In Scotland, the 1st of January and the 2nd of January are bank holidays.",
  },
  {
    id: "750",
    question:
      "The House of Commons is normally more independent of the government than the House of Lords: True or False",
    answer:
      "False. The House of Lords is normally more independent of the government than the House of Commons.",
  },
  {
    id: "751",
    question:
      "During which period were the House of Lords and House of Commons established?",
    answer:
      "In the Middle Ages, the numbers attending Parliament increased and two separate parts, known as Houses were established. These were the House of the Commons and the House of the Lords.",
  },
  {
    id: "752",
    question:
      "What name is given to the period of time when Christians take time to reflect and prepare for Easter?",
    answer:
      "Lent is a time when Christians take time to reflect and prepare for Easter.",
  },
  {
    id: "753",
    question:
      "In the new Church of England created by Henry VIII, who had the power to appoint bishops and order how people should worship?",
    answer:
      "In the new Church of England, the king, not the Pope, would have the power to appoint bishops and order how people should worship.",
  },
  {
    id: "754",
    question:
      "In Wales, many people speak Gaelic – a completely different language from English – and it is taught in schools and universities: True or False",
    answer:
      "False. In Wales, many people speak Welsh – a completely different language from English – and it is taught in schools and universities.",
  },
  {
    id: "755",
    question: "How many years did Queen Victoria reign for?",
    answer:
      "In 1837, Queen Victoria became queen of the UK at the age of 18. She reigned until 1901, almost 64 years.",
  },

  {
    id: "756",
    question:
      "The UK population is ethnically diverse and changing rapidly, especially in large cities such as London: True or False",
    answer:
      "True.The UK population is ethnically diverse and changing rapidly, especially in large cities such as London.",
  },

  {
    id: "757",
    question: "Role of the King",
    answer:
      "The King receives foreign ambassadors and high commissioners, entertains visiting heads of state, and makes state visits overseas in support of diplomatic and relationships with other counties.",
  },
  {
    id: "758",
    question:
      "The Speaker is a neutral MP and does not represent a political party: True or False",
    answer:
      "True. The Speaker is neutral and does not represent a political party, even though he or she is an MP, represents a constituency and deals with the constituents’ problems like any other MP.",
  },
  {
    id: "759",
    question:
      "When did the Vikings first visit Britain to raid coastal towns and take away goods and slaves?",
    answer:
      "The Vikings came from Denmark and Norway. They first visited Britain in AD 789 to raid coastal towns and take away goods and slave. King Alfred the Great defeated the Vikings. ",
  },
  {
    id: "760",
    question:
      "How many National Parks are there in England, Wales and Scotland?",
    answer:
      "There are 15 national parks in England, Wales and Scotland. They are areas of protected countryside that everyone can visit, and where people live, work and look after the landscape.",
  },
  {
    id: "761",
    question: "Which services can be obtained from veterinary surgeons?",
    answer:
      "Vaccinations and medical treatment for animals are available from veterinary surgeons (vets).",
  },

  {
    id: "762",
    question:
      "The devolved governments in Scotland, Wales and Northern Ireland cannot control policies and laws governing taxation and social security: True or False",
    answer:
      "True Policy and laws governing defence, foreign affairs, immigration, taxation and social security all remain under central UK government control. Devolved governments in Scotland, Wales and Northern Ireland have the power to legislate on certain issues.  However, many other public services, such as education, are controlled by the devolved administrations.",
  },
  {
    id: "763",
    question: "The longer life expectancy in the UK has an effect on : ",
    answer:
      "People in the UK are living longer than ever before. This is due to improved living standards and better health care. There are now a record number of people aged 85 and over. This has an impact on the cost of pensions and health care.",
  },
  {
    id: "764",
    question:
      "What percentage of the total British population is located in Scotland?",
    answer:
      "The population is very unequally distributed over the four parts of the UK. England more or less consistently makes up 84% of the total population, Wales around 5%, Scotland just over 8%, and Northern Ireland less than 3%.",
  },
  {
    id: "765",
    question:
      "Which of the  academy award is the equivalent of the Oscars in the UK?",
    answer:
      "The annual British Academy Film Awards, hosted by the British Academy of Film and Television Arts (BAFTA), are the British equivalent of the Oscars.",
  },
  {
    id: "766",
    question: "Which political party was elected after the Second World War?",
    answer:
      "The Labour Party won the 1945 election. Clement Attlee was Prime Minister from 1945 to 1951 and led the Labour Party for 20 years.",
  },
  {
    id: "767",
    question:
      "In which Japanese cities did the United States drop atomic bombs in August 1945?",
    answer:
      "The war against Japan ended in August 1945 when the United States dropped its newly developed atom bombs on the Japanese cities of Hiroshima and Nagasaki.",
  },
  {
    id: "768",
    question: "What is a bank holiday ?",
    answer:
      "In the UK, there are public holidays each year called bank holidays, when banks and many other businesses are closed for the day.",
  },

  {
    id: "769",
    question:
      "By 1200, the English ruled an area of Ireland known as the Pale, around Dublin.",
    answer: "True",
  },
  {
    id: "770",
    question:
      "The most famous rugby union competition is the Six Nations Championship between England, Ireland, Scotland, Wales, France and Italy.",
    answer: "True",
  },

  {
    id: "771",
    question: "Who became Queen after Edward VI?",
    answer:
      "Edward VI died at the age of 15 after ruling for just over six years, and his half-sister Mary became queen.",
  },

  {
    id: "772",
    question:
      "Cases of unfair dismissal or discrimination in the workplace are considered civil offences",
    answer: "True",
  },

  {
    id: "773",

    question:
      "The right to life and the right to liberty and security are some of the principles included in the European Convention of Human Rights:",
    answer: "True. The Human Rights Act 1998 incorporated the European Convention of Human Rights into UK law.Prohibition of torture, Prohibition of slavery and forced labour are principles included in the European Convention of Human Rights. The right to a fair trial is one of the principles of the European Convention of Human Rights. The UK was one of the first countries to sign the European Convention of Human Rights in 1950. Slaves came primarily from West Africa.",
  },
  {
    id: "774",
    question:
      "British values and principles are based on history and traditions and are protected by law, customs and expectations.",
    answer: "True",
  },
  {
    id: "775",
    question:
      "When did the first Christian communities begin to appear in Britain?",
    answer:
      "It was during the 3rd and 4th centuries AD that the first Christian communities began to appear in Britain.",
  },

  {
    id: "776",
    question: "Name the three devolved administrations in the UK",
    answer:
      "There are three devolved administrations in the UK, this include: the Welsh government, the Scottish Parliament and the Northern Ireland Assembly.",
  },
  {
    id: "777",
    question: "Who looks after Edinburgh Castle?",
    answer: "Edinburgh castle is a dominant feature of the skyline in Edinburgh, Scotland. It has a long history, dating back to the early Middle Ages. It is looked after by Historic Environment Scotland.",
  },

  {
    id: "778",
    question: "Each MP represents a parliamentary constituency, which is a small area of the country. True or False",
    answer: "True",
  },
    {
    id: "779",
    question: "Who were the pioneers of the IVF (in-vitro fertilisation) therapy?",
    answer: "IVF (in-vitro fertilisation) therapy for the treatment of infertility was pioneered in Britain by physiologist Sir Robert Edwards (1925-) and gynaecologist Patrick Steptoe (1913-88). The world’s first ‘test-tube baby’ was born in Oldham, Lancashire in 1978.",
  },
      {
    id: "780",
    question: "Name the countries were granted their independence in 1947",
    answer: "In 1947, independence was granted to nine countries, including India, Pakistan and Ceylon (now Sri Lanka).",
  },
       {
    id: "781",
    question: "In the UK, bank holidays of no religious significance are celebrated at the beginning of May, in late May or early June, and in August. True or False",
    answer: "True",
  },

         {
    id: "782",
    question: "Who were the Puritans?",
    answer: "The Puritans were a group of Protestants who advocated strict and simple religious doctrine and worship. They did not agree with the king’s religious views and disliked his reforms of the Church of England.",
  },

  
         {
    id: "783",
    question: "What do William Blake, John Keats and Lord Byron have in common?",
    answer: "Poetry was very popular in the 19th century, with poets such as William Blake, John Keats, Lord Byron, Percy Shelley, Alfred Lord Tennyson, and Robert and Elizabeth Browning.",
  },
  {
    id: "784",
    question: "An additional rented piece of land where people can grow fruit and vegetables is known as:",
    answer: "In the UK, some people rent additional land called ‘an allotment’, where they grow fruit and vegetables.",
  },
  {
    id: "785",
    question: "What is the name of the battle where the Scottish led by Robert the Bruce defeated the English in 1314?",
    answer: "In 1314 the Scottish, led by Robert the Bruce, defeated the English at the Battle of Bannockburn.",
  },
  {
    id: "786",
    question: "Who took the English throne after the death of Henry VIII?",
    answer: "Henry VIII was succeeded by his son Edward VI.",
  },
  {
    id: "787",
    question: "Carrying a weapon is a criminal offence, unless it is for self-defence: True or False",
    answer: "False. It is a criminal offence to carry a weapon of any kind, even if it is for self-defence. This includes a gun, a knife or anything that is made or adapted to cause injury",
  },
  {
    id: "788",
    question: "Prohibition of thought, conscience and religion is one of the principles included in the European Convention of Human Rights: True or False",
    answer: "False. Freedom of thought, conscience and religion is one of the principles included in the European Convention of Human Rights.",
  },
  {
    id: "789",
    question: "Which TWO pop music groups became popular in the 1960s?",
    answer: "Two well-known pop music groups in the 1960s were The Beatles and The Rolling Stones.",
  },
  {
    id: "790",
    question: "Which of the following words comes from the Viking language? Table, Scunthorpe, Pencil, Rabbit",
    answer: "Words such as Grimsby and Scunthorpe come from the Viking languages.",
  },
  {
    id: "791",
    question: "What is the name of the highest mountain in Wales?",
    answer: "Snowdon is the highest mountain in Wales.",
  },
  {
    id: "792",
    question: "Who led a Scottish army against Oliver Cromwell just after England had been declared a Republic?",
    answer: "Charles II was crowned king of Scotland and led a Scottish army into England. Cromwell defeated this army in the Battles of Dunbar and Worcester. After Oliver Cromwell defeated the Scottish army in the Battles of Dunbar and Worcester, Charles II escaped from Worcester, famously hiding in an oak tree on one occasion, and eventually fled to Europe.",
  },
  {
    id: "793",
    question: "When are local elections for councillors held in most local authorities?",
    answer: "For most local authorities, local elections for councillors are held in May every year.",
  },
  {
    id: "794",
    question: "Which lines form part of the citizenship pledge?",
    answer: "I will give my loyalty to the United Kingdom. I will uphold its democratic values. I will observe its laws faithfully. ",
  },
   {
    id: "795",
    question: "Protected by the laws of discrimination?",
    answer: "UK laws ensure that people are not treated unfairly in any area of life or work because of their age, disability, sex, pregnancy and maternity, race, religion or belief, sexuality or marital status. ",
  },
  {
    id: "796",
    question: "In the UK, if the jury finds a defendant guilty, the judge decides the penalty: True or False",
    answer: "True",
  },
  {
    id: "797",
    question: "During the Crusades, European Christians fought for the control of:",
    answer: "European Christians fought for control of the Holy Land.",
  },
   {
    id: "798",
    question: "The line ‘to be or not to be’ belongs to which of the plays or poems written by William Shakespeare?",
    answer: "‘To be or not to be’ is a line from William Shakespeare’s play Hamlet.",
  },
  {
    id: "799",
    question: "Charles I wanted the worship of the Church of England to include more ceremony and introduced a revised Prayer Book. True or False ?",
    answer: "This statement is true.",
  },
  {
    id: "800",
    question: "Who supported the Parliament during the Civil War that began in 1642?",
    answer: "The Roundheads. A civil war between the king and Parliament began in 1642.  The country split into those who supported the king (the Cavaliers) and those who supported Parliament (the Roundheads).",
  },
   {
    id: "801",
    question: "Which poet wrote poems inspired by Scotland and the traditional stories and songs from the area on the borders of Scotland and England?",
    answer: "Sir Walter Scott wrote poems inspired by Scotland and the traditional stories and songs from the area on the borders of Scotland and England",
  },
  {
    id: "802",
    question: "A system of government where the whole adult population gets a say is known as:",
    answer: "Democracy is a system of government where the whole adult population gets a say. This might be by direct voting or by choosing representatives to make decisions on their behalf.",
  },
  {
    id: "803",
    question: "Arranged marriages refer to marriages where both parties agree to the marriage ?",
    answer: "Correct. Arranged marriages refer to marriages where both parties agree to the marriage,are acceptable in the UK.",
  },
   {
    id: "804",
    question: "What name is given to the members of the House of Commons?",
    answer: "All of the elected MPs form the House of Commons.",
  },
  {
    id: "805",
    question: "Who was the first person to print books using a printing press in England?",
    answer: "",
  },
  {
    id: "806",
    question: "Which TWO British kings believed in the ‘Divine Right of Kings’?",
    answer: "James I and his son Charles I both believed in the ‘Divine Right of Kings’: the idea that the king was directly appointed by God to rule. They thought that the king should be able to act without having to seek approval from Parliament.",
  },
   {
    id: "807",
    question: "What was the name of the European Union when it was first established?",
    answer: "West Germany, France, Belgium, Italy, Luxembourg and the Netherlands formed the European Economic Community (EEC) in 1957. The EEC became a part of the European Union when it was formed in 1993.",
  },
  {
    id: "808",
    question: "Which  British poet was inspired by nature?",
    answer: "William Wordsworth was inspired by nature.",
  },
  {
    id: "809",
    question: "After the Second World War, the UK was exhausted economically. True or False",
    answer: "True. Although the UK had won the war, the country was exhausted economically after WWII.",
  },
   {
    id: "810",
    question: "Where is the Scottish Grand National horse racing event celebrated?",
    answer: "The Scottish Grand National horse racing event is celebrated at Ayr.",
  },
  {
    id: "811",
    question: "The responsibility of the MPs?",
    answer: "MPs have a number of different responsibilities. They represent everyone in their constituency, help to create new laws, scrutinize and comment on what the government is doing and debate important national issues.",
  },
  {
    id: "812",
    question: "When Henry VIII took the title ‘King of Ireland’, English laws were introduced and everyone except for local leaders were expected to follow the instructions of the Lord Lieutenants in Dublin: True or False",
    answer: "When Henry VIII took the title ‘King of Ireland’, English laws were introduced and local leaders were expected to follow the instructions of the Lord Lieutenants in Dublin.",
  },
   {
    id: "813",
    question: "When is the anniversary of the Battle of the Boyne celebrated in Northern Ireland?",
    answer: "In Northern Ireland, the anniversary of the Battle of the Boyne is celebrated in July and is also a public holiday.",
  },
  {
    id: "814",
    question: "When was Lincoln Cathedral built?",
    answer: "Lincoln Cathedral was built in the middle ages or medieval times.",
  },
  {
    id: "815",
    question: "Why was Queen Mary known as ‘Bloody Mary’?",
    answer: "Queen Mary was a devout Catholic and persecuted Protestants (for this reason, she became known as ‘Bloody Mary’).",
  },
  {
    id: "816",
    question: "In the UK, brutality and violence in the home is not a crime: True or False",
    answer: "In the UK, brutality and violence in the home is a serious crime.",
  },
  {
    id: "817",
    question: "Since 1997, some powers have been devolved from the central government to give people in Wales, Scotland and Northern Ireland more control over matters that directly affect them: True or False",
    answer: "True",
  },
   {
    id: "818",
    question: "During the Middle Ages, several cathedrals had windows of stained glass, telling stories about:",
    answer: "During the middle ages, several cathedrals had windows of stained glass, telling stories about the Bible and Christian saints. The glass in York Minster is a famous example.",
  },
  {
    id: "819",
    question: "The Senedd has been suspended on a few occasions: True or False",
    answer: "False. The Northern Ireland Assembly has been suspended on a few occasions.",
  },
  {
    id: "820",
    question: "The settlements of Scottish and English Protestants in Ulster (the northern province of Ireland) during the reigns of Elizabeth I and James I, who took over the land from Catholic landholders is known as:",
    answer: "These settlements were known as plantations.",
  },
   {
    id: "821",
    question: "After King Alfred the Great defeated the Vikings, many of the Viking invaders stayed in Britain, especially in the east and north of England in an area called:",
    answer: "Many of the Viking invaders stayed in Britain – especially in the east and north of England in an area known as the Danelaw.",
  },
  {
    id: "822",
    question: "Who is the head of the Church of England?",
    answer: "The monarch is the head of the Church of England.",
  },
  {
    id: "823",
    question: "Who is responsible for managing relationships with foreign countries?",
    answer: "The Foreign Secretary is responsible for managing relationships with foreign countries.",
  },
  {
    id: "824",
    question: "When did Gordon Brown take over as Prime Minister from his predecessor Tony Blair?",
    answer: "Gordon Brown took over as Prime Minister from Tony Blair in 2007.",
  },
  {
    id: "825",
    question: "Where in England was one of the Anglo-Saxon kings buried with treasure and armour?",
    answer: "The burial place of one of the Anglo-Saxon kings was at Sutton Hoo in modern Suffolk.",
  },
   {
    id: "826",
    question: "Which British writer wrote satirical novels including Brideshead Revisited?",
    answer: "Evelyn Waugh wrote satirical novels, including Decline and Fall and Scoop. He is perhaps best known for Brideshead Revisited.",
  },
  {
    id: "827",
    question: "Which of the sports began in the UK?",
    answer: "Many famous sports, including cricket, football, lawn tennis, golf and rugby, began in Britain.",
  },
  {
    id: "828",
    question: "Which famous architect designed Dumfries House?",
    answer: "The Scottish architect Robert Adam designed the inside decoration as well as the building itself in great houses such as Dumfries House in Scotland.",
  },
   {
    id: "829",
    question: "What did the Education Act of 1944 introduce?",
    answer: "The Education Act 1944 (often called ‘The Butler Act’), introduced free secondary education in England and Wales.",
  },
  {
    id: "830",
    question: "Which of the  tribes invaded Britain?",
    answer: "The Roman army left Britain in AD 410 to defend other parts of the Roman Empire and never returned. Britain was again invaded by tribes from northern Europe: the Jutes, the Angles and the Saxons.",
  },
  {
    id: "831",
    question: "Many schools organise events such as book sales, toy sales or bringing food to sell to raise money for extra equipment or out-of-school activities. True or False",
    answer: "This statement is TRUE",
  },
  {
    id: "832",
    question: "Who wrote the novel Charlie and the Chocolate Factory?",
    answer: "Roald Dahl is the author of Charlie and the Chocolate Factory.",
  },
  {
    id: "833",
    question: "Who were the Huguenots?",
    answer: "Between 1680 and 1720 many refugees called Huguenots came from France. They were Protestants and had been persecuted for their religion. Many were educated and skilled and worked as scientists, in banking, or in weaving or other crafts.",
  },
   {
    id: "834",
    question: "When is Mothering Sunday?",
    answer: "Mothering Sunday (or Mother’s day) is the Sunday three weeks before Easter. Children send cards or buy gifts for their mothers.",
  },
  {
    id: "835",
    question: "Which countries fought alongside Britain against Russia during the Crimean War?",
    answer: "From 1853 to 1856, Britain fought with Turkey and France against Russia in the Crimean War.",
  },
  {
    id: "836",
    question: "On average, boys leave school with better qualifications than girls.",
    answer: "False. On average, girls leave school with better qualifications than boys.",
  },
   {
    id: "837",
    question: "When did William of Orange invade England to proclaim himself king?",
    answer: "In 1688, important Protestants in England asked William of Orange to invade England and proclaim himself king. When William reached England, there was no resistance. James fled to France and William took over the throne, becoming William III in England, Wales and Ireland, and William II of Scotland.",
  },
   {
    id: "838",
    question: "Which British painter is considered to be the artist who raised the profile of landscape painting?",
    answer: "Joseph Turner (1775-1851) was an influential landscape painter in a modern style. He is considered the artist who raised the profile of landscape painting.",
  },
  {
    id: "839",
    question: "The development of the Bessemer process during the Industrial Revolution led to the development of which two industries:",
    answer: "The development of the Bessemer process for the mass production of steel led to the development of the shipbuilding industry and the railways.",
  },
  {
    id: "840",
    question: "More women than men study at university. True or False",
    answer: "This statement is TRUE.",
  },
  {
    id: "841",
    question: "Why did Ireland suffer a famine in the middle of the 19th century?",
    answer: "In the middle of the century the potato crop failed, and Ireland suffered a famine. A million people died from disease and starvation.",
  },
   {
    id: "842",
    question: "What sort of battle was ‘the Battle of Britain’?",
    answer: "An aerial battle against the Germans. Hitler wanted to invade Britain, but before sending in troops, Germany needed to control the air campaign against Britain, but the British resisted with their fighter planes and eventually won the crucial aerial battle against the Germans, called ‘the Battle of Britain’, in the summer of 1940.",
  },
   {
    id: "843",
    question: "Who is in charge of appointing the local Chief Constable?",
    answer: "PCCs (Police and Crime Commissioners) set local police priorities and the local policing budget. They also appoint the local Chief Constable.",
  },
  {
    id: "844",
    question: "How many British died on the first day alone of the Battle of Somme?",
    answer: "The British attack of the Somme in July 1916, resulted in about 60,000 British casualties on the first day alone.",
  },
  {
    id: "845",
    question: "What do Sir Terence Conran, Clarice Cliff and Thomas Chippendale have in common?",
    answer: "Britain has produced many great designers, from Thomas Chippendale (who designed furniture in the 18th century) to Clarice Cliff (who designed Art Deco ceramics) to Sir Terence Conran (a 20th-century interior designer).",
  },
  {
    id: "846",
    question: "Cities in Wales?",
    answer: "Cardiff, Swansea, Newport",
  },
  {
    id: "847",
    question: "Which Saxon king of England was killed at the Battle of Hastings in 1066?",
    answer: "In 1066, an invasion led by William, the Duke of Normandy (in what is now northern France), defeated Harold, the Saxon king of England, at the Battle of Hastings. Harold was killed in the battle.",
  },
   {
    id: "848",
    question: "As a permanent resident or citizen of the UK you should:",
    answer: "If you wish to be a permanent resident or citizen of the UK, you should: respect and obey the law, respect the rights of others, including their right to their own opinions, treat others with fairness, look after yourself and your family and look after the area in which you live and the environment.",
  },
  {
    id: "849",
    question: "Women in Britain today make up about one third of the workforce.",
    answer: "False. Women in Britain today make up about half of the workforce.",
  },
  {
    id: "850",
    question: "The evacuation of British and French soldiers from France in a huge naval operation during WWII gave rise to which phrase:",
    answer: "During WWII as France fell, the British decided to evacuate British and French soldiers from France in a huge naval operation. Many civilian volunteers in small pleasure and fishing boats from Britain helped the Navy to rescue more than 300,000 men from the beaches around Dunkirk. The evacuation gave rise to the phrase ‘the Dunkirk spirit’.",
  },
   {
    id: "851",
    question: "Which programme helps 16 and 17 year-olds develop their skills and are part in community projects?",
    answer: "The National Citizen Service programme gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project.",
  },
  {
    id: "852",
    question: "Who wrote the books ‘Pride and Prejudice’ and ‘Sense and Sensibility’?",
    answer: "Jane Austen (1775-1817) was an English novelist. Her books include Pride and Prejudice and Sense and Sensibility.",
  },
  {
    id: "853",
    question: "In which city is the Millennium Stadium located?",
    answer: "The Millennium Stadium is located in Cardiff.",
  },
  {
    id: "854",
    question: "Who lost a lot of power and influence after the Battle of Culloden in 1746?",
    answer: "The clans lost a lot of their power and influence after Culloden. Chieftains became landlords if they had the favour of the English king, and clansmen became tenants who had to pay for the land they used.The Jacobite supporters of Charles Edward Stuart (Bonnie Prince Charlie) lost a lot of power and influence after the Battle of Culloden in 1746.",
  },
  {
    id: "855",
    question: "What UK landmark was voted as Britain’s favourite view in 2007?",
    answer: "In 2007, television viewers voted Wastwater as Britain’s favourite view.",
  },
  {
    id: "856",
    question: "When did the development of a free press take place?",
    answer: "From 1695, newspapers were allowed to operate without a government licence. Increasing numbers of newspapers began to be published.",
  },
   {
    id: "857",
    question: "Which was the last successful foreign invasion of England?",
    answer: "The Norman Conquest was the last successful foreign invasion of England and led to many changes in government and social structures in England.",
  },
   {
    id: "858",
    question: "Who was Richard Austen Butler?",
    answer: "Richard Austen Butler (later Lord Butler) became a Conservative MP in 1923 and held several positions before becoming responsible for education in 1941.",
  },
  {
    id: "859",
    question: "Which TWO British poets wrote about their experiences in the WWI?",
    answer: "Wilfred Owen and Siegfried Sassoon were inspired to write about their experiences in the First World War.",
  },
   {
    id: "860",
    question: "If you are found driving while exceeding the alcohol limit you will:",
    answer: "If you are found driving while exceeding the alcohol limit you will be arrested.",
  },
  {
    id: "861",
    question: "Which TWO  are core values of a civil servant?",
    answer: "The core values of civil servants include: integrity, honesty, objectivity and impartiality (including being politically neutral).",
  },
  {
    id: "862",
    question: "What is the name of the first Danish king to rule in England?",
    answer: "Anglo-Saxon kings continued to rule what is now England, except for a short period when there were Danish kings. The first of these was Cnut, also named Canute.",
  },
  {
    id: "863",
    question: "It is a civil offence to owe money to someone and you might be taken to court.",
    answer: "Owing money to someone is a civil offence.",
  },
  {
    id: "864",
    question: "In which country of the British Empire did the Boer War take place?",
    answer: "The Boer War of 1899 to 1902 made the discussions about the future of the Empire more urgent. The British went to war in South Africa with settlers from the Netherlands called the Boers.",
  },
   {
    id: "865",
    question: "Robert Louis Stevenson, Graham Greene and Sir Kingsley Amis were British writers.",
    answer: "This statement is True.",
  },
  {
    id: "866",
    question: "",
    answer: "",
  },
  {
    id: "867",
    question: "Which new industries developed in the UK during the Great Depression (choose 2 answers)?",
    answer: "In 1929, the world entered the ‘Great Depression’ and some parts of the UK suffered mass unemployment. The effects of the depression of the 1930s were felt differently in different parts of the UK. The traditional heavy industries such as shipbuilding were badly affected but new industries – including the automobile and aviation industries – developed.",
  },
  
  {
    id: "868",
    question: "When did the English civil war start?",
    answer: "Civil war between the king and Parliament could not now be avoided and began in 1642.",
  },
   {
    id: "869",
    question: "During the 19th century, the UK was the world’s major producer of which THREE materials?",
    answer: "British industry led the world in the 19th century. The UK produced more that half of the world’s iron, coal and cotton cloth.",
  },
  {
    id: "870",
    question: "Which TWO of the following British athletes have won gold medals in the Olympic Games?",
    answer: "Dame Kelly Holmes and Jessica Enis won gold medals in the Olympic Games.",
  },
  {
    id: "871",
    question: "Who introduced ‘shampooing’ in Britain?",
    answer: "Sake Dean Mahomet and his wife also introduced ‘shampooing’, the Indian art of head massage, to Britain.",
  },
  {
    id: "872",
    question: "To be able to vote in England, you have to register at your local council electoral registration office.",
    answer: "This statement is true.",
  },
  {
    id: "873",
    question: "What are the key roles of the governors and school boards? ",
    answer: "Governors and school boards have an important part to play in raising school standards. They have three key roles: setting the strategic direction of the school, ensuring accountability and monitoring and evaluating school performance.",
  },
   {
    id: "874",
    question: "Why is it important to recycle?",
    answer: "It is important to recycle as much of your waste as you can. Using recycled materials to make new products uses less energy and means that we do not need to extract more raw materials from the earth. It also means that less rubbish is created, so the amount being put into landfill is reduced.",
  },
  {
    id: "875",
    question: "In Northern Ireland, a newly qualified driver must display an ____ plate for one year after passing the test.",
    answer: "In Northern Ireland, a newly qualified driver must display an ‘R’ plate (for restricted driver) for one year after passing the test.",
  },
  {
    id: "876",
    question: "Prince William is also known as:",
    answer: "Prince William is also known as the Prince of Wales.",
  },
  {
    id: "",
    question: "",
    answer: "",
  },

];

export default allFlashcards;.
