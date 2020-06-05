const stepNumber = 3;
const answer = {
  question0: {
    personal: {
      name: '',
      email: '',
      country: '',
      contact: '',
    },
  },
  question1: {
    toolUsage: null,
  },
  question1_2_3: {
    isMissing: '',
    moreValue: [false, false, false, false, false, false],
  },
  question1_4_5: {
    xpSuggest: '',
    neverUse: '',
  },
  question2: {
    howSatisfied: null,
  },
  question2_1: {
    comment: '',
  },
  question3: {
    npsValue: 7,
  },
  question3_1: {
    comment: '',
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

const frameQuestion11 =
  'To help us to improve, could you please share more what is missing to know more about the tool?';

const frameQuestion12 = {
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

const frameQuestion13 =
  'Please, how was your experience? Do you have any suggestions to improve the analysis results?';

const frameQuestion14 =
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

const frameQuestion21 = 'Explain why:';

const frameQuestion3 =
  'How likely is that you would recommend the CLA tool to a friend or colleague?';

const frameQuestion31 =
  'If you have any other comments questions or concerns please type bellow:';

module.exports = {
  stepNumber,
  answer,
  frameQuestion1,
  frameQuestion11,
  frameQuestion12,
  frameQuestion13,
  frameQuestion14,
  frameQuestion2,
  frameQuestion21,
  frameQuestion3,
  frameQuestion31,
};
