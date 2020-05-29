const stepNumber = 3;
const answer = {
  question0: {
    filled: false,
    personal: { name: '', email: '', country: '' },
  },
  question1: {
    filled: false,
    toolUsage: null,
  },
  question1_2_3: {
    filled: false,
    isMissing: '',
    moreValue: [],
  },
  question1_4_5: {
    filled: false,
    xpSuggest: '',
    neverUse: '',
  },
  question2: {
    filled: false,
    howSatisfied: null,
  },
  question2_1: {
    filled: false,
    comment: '',
  },
  question3: {
    filled: false,
    npsValue: null,
  },
};

const frameQuestion1 = {
  question: 'Do you know the Contracting Language Analysis tool?',
  options: [
    'I never heard about it',
    'I heard but never used',
    'I already accessed via DCA but did not consume the analysis',
    'I used and consumed the analyzes once',
    'I use often',
  ],
};

const frameQuestion1_1 =
  'To help us to improve, could you please share more what is missing to know more about the tool?';

const frameQuestion1_2 = {
  question: 'In your opinion, what would add more value to the tool?',
  options: [
    'Overview page',
    'Risky words',
    'Risky sentences',
    'Basic Terms',
    'Accounts Receivable',
    'None of them',
  ],
};

const frameQuestion1_3 =
  'Please, how was your experience? Do you have any suggestions to improve the analysis results?';

const frameQuestion1_4 =
  'Could you please comment on why you never used or any suggestions?';

const frameQuestion2 = {
  question: 'Overall, how satisfied or dissatisfied are you with the CLA?',
  options: [
    'Very satisfied',
    'Somewhat satisfied',
    'Neither satisfied nor dissatisfied',
    'Somewhat dissatisfied',
    'Very dissatisfied',
  ],
};

const frameQuestion2_1 = 'Please comment: ';

const framQuestion3 =
  'How likely is that you would recommend the CLA tool to a friend or colleague?';

const framQuestion3_1 =
  'If you have any other comments questions or concerns please type bellow:';

module.exports = {
  stepNumber,
  answer,
  frameQuestion1,
  frameQuestion1_1,
  frameQuestion1_2,
  frameQuestion1_3,
  frameQuestion1_4,
  frameQuestion2,
  frameQuestion2_1,
  framQuestion3,
  framQuestion3_1,
};
