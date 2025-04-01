export interface ContactMessage {
  _id: string;
  _createdAt: string;
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  _id: string;
  name: string;
  url: string;
  platform: string;
}

export interface ContactInfo {
  _id: string;
  email: string;
  socialLinks: SocialLink[];
}
