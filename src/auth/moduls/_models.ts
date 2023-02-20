export interface AuthModel {
    token: string
  }

  export interface UserModel {
    name: string
    password: string | undefined
    email: string
    profile_pic: string
    roleName: string
    mobileNumber: string
  }

export interface JSONResponseModel {
    success: boolean,
    statusCode: string,
    message: string,
    data: UserModel | AuthModel | any
  }