import { defineArrayMember, defineField, defineType } from "sanity";

export const marketingPageType = defineType({
  name: "marketingPage",
  title: "Marketing Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eyebrow",
      type: "string",
    }),
    defineField({
      name: "summary",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "sectionType", type: "string" }),
            defineField({ name: "heading", type: "string" }),
            defineField({ name: "body", type: "text" }),
          ],
        }),
      ],
    }),
  ],
});
