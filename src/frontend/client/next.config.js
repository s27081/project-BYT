module.exports = {
  serverRuntimeConfig: {
      signInUrl: process.env.NEXT_SERVER_SIGNINURL,
      signUpUrl: process.env.NEXT_SERVER_SIGNUPURL,
      currentUserUrl: process.env.NEXT_SERVER_CURRENTUSERURL,
      joinGroupUrl: process.env.NEXT_SERVER_JOINGROUPURL,
      showUserGroupUrl: process.env.NEXT_SERVER_SHOWUSERGROUP,
      deleteUserFromGroupUrl: process.env.NEXT_SERVER_DELETEUSERFROMGROUP,
      addGroupUrl: process.env.NEXT_SERVER_ADDGROUPURL,
      showUsersInGroup: process.env.NEXT_SERVER_SHOWUSERSINGROUP,
      changePassword: process.env.NEXT_SERVER_CHANGEPASSWORD,
      deleteUser: process.env.NEXT_SERVER_DELETEUSER,
      singOutUrl: process.env.NEXT_SERVER_SIGNOUTURL
      
  },
  publicRuntimeConfig: {
      signInUrl: process.env.NEXT_PUBLIC_SIGNINURL,
      signUpUrl: process.env.NEXT_PUBLIC_SIGNUPURL,
      currentUserUrl: process.env.NEXT_PUBLIC_CURRENTUSERURL,
      joinGroupUrl: process.env.NEXT_PUBLIC_JOINGROUPURL,
      showUserGroupUrl: process.env.NEXT_PUBLIC_SHOWUSERGROUP,
      deleteUserFromGroupUrl: process.env.NEXT_PUBLIC_DELETEUSERFROMGROUP,
      addGroupUrl: process.env.NEXT_PUBLIC_ADDGROUPURL,
      showUsersInGroup: process.env.NEXT_PUBLIC_SHOWUSERSINGROUP,
      changePassword: process.env.NEXT_PUBLIC_CHANGEPASSWORD,
      deleteUser: process.env.NEXT_PUBLIC_DELETEUSER,
      singOutUrl: process.env.NEXT_PUBLIC_SIGNOUTURL
  },
};