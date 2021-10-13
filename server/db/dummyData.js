const groups = [
  {
    id: 1,
    name: "Sunday Brunch",
    picture:"https://static.zerochan.net/Bishoujo.Senshi.Sailor.Moon.full.3162218.jpg",
    updated_at: "08/24/2021 04:26:49 AM",
    members: [
      {
        id: 111,
        first_name: "Sailor",
        last_name: "Moon",
        email: "sailorMoon@123.com",
        balance: 90,
      },
      {
        id: 112,
        first_name: "Sailor",
        last_name: "Mars",
        email: "sailorMars@123.com",
        balance: -30,
      },
      {
        id: 113,
        first_name: "Sailor",
        last_name: "Venus",
        email: "sailorVenus@123.com",
        balance: -30,
      },
      {
        id: 114,
        first_name: "Sailor",
        last_name: "Jupiter",
        email: "sailorJupiter@123.com",
        balance: -30,
      },
    ],

    simplified_debts: [
      {
        from: "Sailor Moon",
        to: "Sailor Mars",
        amount: 30,
        currency_code: "USD",
      },

      {
        from: "Sailor Moon",
        to: "Sailor Venus",
        amount: 30,
        currency_code: "USD",
      },

      {
        from: "Sailor Moon",
        to: "Sailor Jupiter",
        amount: 30,
        currency_code: "USD",
      },

    ],
  },

  {
    id: 2,
    name: "WestView New House",
    picture: "https://nestia-food.obs.ap-southeast-3.myhuaweicloud.com/202009/22/4ad34e67f99d611420529ba30f39427b.png",
    updated_at: "08/13/2021 02:10:57 PM",
    members: [
      {
        id: 115,
        first_name: "Wanda",
        last_name: "Maximoff",
        email: "wandaMaximoff@123.com",
        balance: 4134.5,
      },
      {
        id: 116,
        first_name: "Tommy",
        last_name: "Maximoff",
        email: "tommyMaximoff@123.com",
        balance: -1865.5,
      },
      {
        id: 117,
        first_name: "Billy",
        last_name: "Maximoff",
        email: "billyMaximoff@123.com",
        balance: -1865.5,
      },
      {
        id: 118,
        first_name: "Vision",
        last_name: "",
        email: "vision@123.com",
        balance: -403.5,
      },
    ],
    simplified_debts: [
      {
        from: "Wanda Maximoff",
        to: "Tommy Maximoff",
        amount: 1865.5,
        currency_code: "USD",
      },

      {
        from: "Wanda Maximoff",
        to: "Billy Maximoff",
        amount: 1865.5,
        currency_code: "USD",
      },

      {
        from: "Wanda Maximoff",
        to: "Vision",
        amount: 403.5,
        currency_code: "USD",
      },
    ],
  },

  {
    id: 3,
    name: "Hack Reactor Tuition"
  },

  {
    id: 4,
    name: "Central Park Picnic"
  },

  {
    id: 5,
    name: "edc Las Vegas"
  },

  {
    id: 6,
    name: "Graduation Trip"
  },

  {
    id: 7,
    name: "Wine Shopping"
  },

  {
    id: 8,
    name: "Broadway Shows"
  },

  {
    id: 9,
    name: "Netflix Subscription"
  }
];

const transactions1 = [
  {
    id: 1111,
    cost: 35,
    group_id: 1,
    description: 'pancake',
    updated_at: '08/12/2021 01:46:23 PM',
    payor: [{
      user_id: 111,
      first_name: "Sailor",
      last_name: "Moon",
      amount: 35
    }]
  },

  {
    id: 1112,
    cost: 49,
    group_id: 1,
    description: 'mimosa',
    updated_at: '08/12/2021 02:46:23 PM',
    payor: [{
      user_id: 111,
      first_name: "Sailor",
      last_name: "Moon",
      amount: 49
    }]
  },

  {
    id: 1113,
    cost: 36,
    group_id: 1,
    description: 'shrimp pasta',
    updated_at: '08/12/2021 03:46:23 PM',
    payor: [{
      user_id: 111,
      first_name: "Sailor",
      last_name: "Moon",
      amount: 36
    }]
  }
];

const transactions2 = [
  {
    id: 1114,
    cost: 266,
    group_id: 2,
    description: "Halloween candy",
    updated_at: "08/30/2021 01:41:35 AM",
    payor: [
      {
        user_id: 115,
        first_name: "Wanda",
        last_name: "Maximoff",
        amount: 266
      },
    ],
  },

  {
    id: 1115,
    cost: 499,
    group_id: 2,
    description: "computers",
    updated_at: "09/07/2021 04:28:33 PM",
    payor: [
      {
        user_id: 115,
        first_name: "Wanda",
        last_name: "Maximoff",
        amount: 499
      },
    ],
  },

  {
    id: 1116,
    cost: 899,
    group_id: 2,
    description: "dog food",
    updated_at: "08/03/2021 10:40:27 PM",
    payor: [
      {
        user_id: 115,
        first_name: "Wanda",
        last_name: "Maximoff",
        amount: 899
      },
    ],
  },

  {
    id: 1117,
    cost: 1899,
    group_id: 2,
    description: "groceries",
    updated_at: "08/12/2021 01:46:23 PM",
    payor: [
      {
        user_id: 115,
        first_name: "Wanda",
        last_name: "Maximoff",
        amount: 1899
      },
    ],
  },

  {
    id: 1118,
    cost: 3899,
    group_id: 2,
    description: "king size bed",
    updated_at: "09/10/2021 11:11:31 PM",
    payor: [
      {
        user_id: 115,
        first_name: "Wanda",
        last_name: "Maximoff",
        amount: 2437
      },

      {
        user_id: 118,
        first_name: "Vision",
        last_name: "",
        amount: 1462
      },
    ],
  },
];

module.exports = {
  groups,
  transactions1,
  transactions2
};