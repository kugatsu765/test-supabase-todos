
declare interface IAppMetadata {
    provider: string;
    providers: string[];
}

declare interface IUserMetadata {
}

declare interface IIdentityData {
    sub: string;
}

declare interface IIdentity {
    id: string;
    user_id: string;
    identity_data: IIdentityData;
    provider: string;
    last_sign_in_at: Date;
    created_at: Date;
    updated_at: Date;
}

declare interface IUser {
    id: string;
    aud: string;
    role: string;
    email: string;
    email_confirmed_at: Date;
    phone: string;
    confirmation_sent_at: Date;
    confirmed_at: Date;
    recovery_sent_at: Date;
    last_sign_in_at: Date;
    app_metadata: IAppMetadata;
    user_metadata: IUserMetadata;
    identities: IIdentity[];
    created_at: Date;
    updated_at: Date;
}