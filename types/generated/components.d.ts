import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsButtonLink extends Schema.Component {
  collectionName: 'components_components_button_links';
  info: {
    displayName: 'ButtonLink';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'ghost']> &
      Attribute.Required;
    link: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsCourse extends Schema.Component {
  collectionName: 'components_components_courses';
  info: {
    displayName: 'Course';
    description: '';
  };
  attributes: {
    logo: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.Relation<
      'components.course',
      'oneToOne',
      'api::course.course'
    >;
    description: Attribute.Text & Attribute.Required;
    link: Attribute.Component<'components.link'> & Attribute.Required;
  };
}

export interface ComponentsFeature extends Schema.Component {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ComponentsFooterContact extends Schema.Component {
  collectionName: 'components_components_footer_contacts';
  info: {
    displayName: 'Footer Contact';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsFooterSocialLinks extends Schema.Component {
  collectionName: 'components_components_footer_social_links';
  info: {
    displayName: 'Footer Social Links';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    imageLinks: Attribute.Component<'components.image-link', true>;
  };
}

export interface ComponentsImageLink extends Schema.Component {
  collectionName: 'components_components_image_links';
  info: {
    displayName: 'imageLink';
    icon: 'exit';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsInstructor extends Schema.Component {
  collectionName: 'components_components_instructors';
  info: {
    displayName: 'Instructor';
  };
  attributes: {
    instructor: Attribute.Relation<
      'components.instructor',
      'oneToOne',
      'api::instructor.instructor'
    >;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsNewsLetter extends Schema.Component {
  collectionName: 'components_components_news_letters';
  info: {
    displayName: 'News Letter';
    icon: 'envelop';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text & Attribute.Required;
    policyTerms: Attribute.Blocks & Attribute.Required;
  };
}

export interface ComponentsReviews extends Schema.Component {
  collectionName: 'components_components_reviews';
  info: {
    displayName: 'Reviews';
    description: '';
  };
  attributes: {
    content: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'>;
    name: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsSocialLinks extends Schema.Component {
  collectionName: 'components_components_social_links';
  info: {
    displayName: 'Social Links';
    icon: 'exit';
  };
  attributes: {
    link: Attribute.Component<'components.image-link', true> &
      Attribute.Required;
  };
}

export interface ComponentsStudent extends Schema.Component {
  collectionName: 'components_components_students';
  info: {
    displayName: 'Student';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'>;
    course: Attribute.Relation<
      'components.student',
      'oneToOne',
      'api::course.course'
    >;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    newsLetter: Attribute.Component<'components.news-letter'>;
    socialLinks: Attribute.Component<'components.footer-social-links'>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    logoText: Attribute.Component<'components.link'>;
    logo: Attribute.Media<'images'>;
    ctaButton: Attribute.Component<'components.link'>;
    navlinks: Attribute.Component<'components.link', true>;
  };
}

export interface PagePropertiesSeoMetaTag extends Schema.Component {
  collectionName: 'components_page_properties_seo_meta_tags';
  info: {
    displayName: 'MetaTag';
    icon: 'code';
  };
  attributes: {
    Name: Attribute.String;
    Content: Attribute.String;
  };
}

export interface PagePropertiesSeoSeo extends Schema.Component {
  collectionName: 'components_page_properties_seo_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    MetaTitle: Attribute.String;
    MetaDescription: Attribute.Text;
    MetaTag: Attribute.Component<'page-properties-seo.meta-tag', true>;
  };
}

export interface SectionsCourseSection extends Schema.Component {
  collectionName: 'components_sections_course_sections';
  info: {
    displayName: 'Course Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text & Attribute.Required;
    link: Attribute.Component<'components.link'>;
    courses: Attribute.Component<'components.course', true>;
  };
}

export interface SectionsCtaSection extends Schema.Component {
  collectionName: 'components_sections_cta_sections';
  info: {
    displayName: 'CTA section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text & Attribute.Required;
    buttonLink: Attribute.Component<'components.button-link'> &
      Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface SectionsFacultySection extends Schema.Component {
  collectionName: 'components_sections_faculty_sections';
  info: {
    displayName: 'Faculty Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text & Attribute.Required;
    instructors: Attribute.Component<'components.instructor', true> &
      Attribute.Required;
  };
}

export interface SectionsFeatureSection extends Schema.Component {
  collectionName: 'components_sections_feature_sections';
  info: {
    displayName: 'Feature Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text & Attribute.Required;
    image1: Attribute.Media<'images'> & Attribute.Required;
    image2: Attribute.Media<'images'> & Attribute.Required;
    feature: Attribute.Component<'components.feature', true> &
      Attribute.Required;
    buttonLink: Attribute.Component<'components.button-link'> &
      Attribute.Required;
  };
}

export interface SectionsHeroSection extends Schema.Component {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    buttonLink: Attribute.Component<'components.button-link'> &
      Attribute.Required;
  };
}

export interface SectionsReviewsSection extends Schema.Component {
  collectionName: 'components_sections_reviews_sections';
  info: {
    displayName: 'Reviews Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text & Attribute.Required;
    reviews: Attribute.Component<'components.reviews', true> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.button-link': ComponentsButtonLink;
      'components.course': ComponentsCourse;
      'components.feature': ComponentsFeature;
      'components.footer-contact': ComponentsFooterContact;
      'components.footer-social-links': ComponentsFooterSocialLinks;
      'components.image-link': ComponentsImageLink;
      'components.instructor': ComponentsInstructor;
      'components.link': ComponentsLink;
      'components.news-letter': ComponentsNewsLetter;
      'components.reviews': ComponentsReviews;
      'components.social-links': ComponentsSocialLinks;
      'components.student': ComponentsStudent;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'page-properties-seo.meta-tag': PagePropertiesSeoMetaTag;
      'page-properties-seo.seo': PagePropertiesSeoSeo;
      'sections.course-section': SectionsCourseSection;
      'sections.cta-section': SectionsCtaSection;
      'sections.faculty-section': SectionsFacultySection;
      'sections.feature-section': SectionsFeatureSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.reviews-section': SectionsReviewsSection;
    }
  }
}
