import { ADD_SPEECH } from '../constants/ActionTypes';

const DEFAULT_DELAY = 1500;

const speeches = [{
  id: 1,
  content: '你好!',
  next:2,
}, {
  id: 2,
  content: '我是momo!',
  next:3,
}, {
  id: 3,
  content: '这是什么？',
  user:true,
  delay: 2500,
  next:4,
}, {
  id: 4,
  content: '我是一个机器人，负责介绍我的主人，一个想吃香蕉的程序员。',
  next:5,
}, {
  id: 5,
  content: '...',
  user:true,
  next:6,
}, {
  id: 6,
  content: '...',
  next:7,
}, {
  id: 7,
  content: '由于我的主人很懒, 所以先到此为止吧！',
  next:8,
}, {
  id: 8,
  content: '-.-',
  user:true,
  next:9,
}
];

const speechMap = {};
speeches.reduce((map, speech) => {
  map[speech.id] = speech;
  return map;
  }, 
  speechMap
);

function bot(preSpeech) {
  const reply = speechMap[preSpeech.next];
  const delay = reply.delay || DEFAULT_DELAY;
  return new Promise((resolve, reject) => {
    setTimeout(() => 
      resolve(reply),
      delay
    );
  });
}

export default bot;

// class Record {
//   constructor(emitter) {
//     this.emitter = emitter;
//     this.messageMap = message.reduce((map, message) => 
//       map[message.id] = message, 
//       {});
//   }

//   biubiu(preMessage) {
//     const nextMessage = this.messageMap[preMessage.id];
//     setTimeout(() => 
//       this.emitter({
//         type: ADD_SPEECH,
//         message: nextMessage
//       })
//     );
//   }
// }

