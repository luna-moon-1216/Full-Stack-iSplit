const groups = [
    {
      id: 1,
      name: 'Sunday Brunch',
      updated_at: '08/24/2021 04:26:49 AM',
      members: [
        {
          id: 111,
          first_name: 'Sailor',
          last_name: 'Moon',
          email: 'sailorMoon@123.com',
          balance: 5.67

        },
        {
          id: 112,
          first_name: 'Sailor',
          last_name: 'Mars',
          email: 'sailorMars@123.com',
          balance: 7.00

        },
        {
          id: 113,
          first_name: 'Sailor',
          last_name: 'Venus',
          email: 'sailorVenus@123.com',
          balance: 5.39

        },
        {
          id: 114,
          first_name: 'Sailor',
          last_name: 'Jupiter',
          email: 'sailorJupiter@123.com',
          balance: 5.88

        }
      ]
    },


    {
      id: 2,
      name: 'WestView House',
      updated_at: '08/13/2021 02:10:57 PM',
      members: [
        {
          id: 115,
          first_name: 'Wanda',
          last_name: 'Maximoff',
          email: 'wandaMaximoff@123.com',
          balance: 25

        },
        {
          id: 116,
          first_name: 'Tommy',
          last_name: 'Maximoff',
          email: 'tommyMaximoff@123.com',
          balance: 49

        },
        {
          id: 117,
          first_name: 'Billy',
          last_name: 'Maximoff',
          email: 'billyMaximoff@123.com',
          balance: 77

        },
        {
          id: 118,
          first_name: 'Vision',
          last_name: '',
          email: 'vision@123.com',
          balance: 89

        }
      ]
    }
  ];

const transactions1 = [
  {
    id: 1111,
    cost: 26,
    group_id: 1,
    description: 'pancake',
    updated_at: '08/12/2021 01:46:23 PM'
  },

  {
    id: 1112,
    cost: 49,
    group_id: 1,
    description: 'mimosa',
    updated_at: '08/12/2021 02:46:23 PM'
  },

  {
    id: 1113,
    cost: 36,
    group_id: 1,
    description: 'shrimp pasta',
    updated_at: '08/12/2021 03:46:23 PM'
  }
];

const transactions2 = [
  {
    id: 1114,
    cost: 266,
    group_id: 2,
    description: 'Halloween candies',
    updated_at: '08/30/2021 01:41:35 AM'
  },

  {
    id: 1115,
    cost: 499,
    group_id: 2,
    description: 'computers',
    updated_at: '09/07/2021 04:28:33 PM'
  },

  {
    id: 1116,
    cost: 899,
    group_id: 2,
    description: 'dog food',
    updated_at: '08/03/2021 10:40:27 PM'
  },

  {
    id: 1117,
    cost: 1899,
    group_id: 2,
    description: 'groceries',
    updated_at: '08/12/2021 01:46:23 PM'
  },

  {
    id: 1118,
    cost: 1899,
    group_id: 2,
    description: 'king size bed',
    updated_at: '09/10/2021 11:11:31 PM'
  }
];

module.exports = {
  groups,
  transactions1,
  transactions2
};