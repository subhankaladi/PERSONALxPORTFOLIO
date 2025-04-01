export const contactMessage = {
  name: 'contactMessage',
  title: 'Contact Messages',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
    },
  ],
};

// export const socialLink = {
//   name: 'socialLink',
//   title: 'Social Links',
//   type: 'document',
//   fields: [
//     {
//       name: 'name',
//       title: 'Platform Name',
//       type: 'string',
//       validation: (Rule: any) => Rule.required(),
//     },
//     {
//       name: 'url',
//       title: 'URL',
//       type: 'url',
//       validation: (Rule: any) => Rule.required(),
//     },
//     {
//       name: 'platform',
//       title: 'Platform',
//       type: 'string',
//       options: {
//         list: [
//           { title: 'Facebook', value: 'facebook' },
//           { title: 'Instagram', value: 'instagram' },
//           { title: 'LinkedIn', value: 'linkedin' },
//           { title: 'Twitter', value: 'twitter' },
//           { title: 'YouTube', value: 'youtube' },
//           { title: 'Telegram', value: 'telegram' },
//         ],
//       },
//       validation: (Rule: any) => Rule.required(),
//     },
//   ],
// };

// export const contactInfo = {
//   name: 'contactInfo',
//   title: 'Contact Information',
//   type: 'document',
//   fields: [
//     {
//       name: 'email',
//       title: 'Email',
//       type: 'string',
//       validation: (Rule: any) => Rule.required().email(),
//     },
//     {
//       name: 'socialLinks',
//       title: 'Social Links',
//       type: 'array',
//       of: [{ type: 'reference', to: [{ type: 'socialLink' }] }],
//     },
//   ],
// };
