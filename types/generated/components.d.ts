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
    url: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsContact extends Schema.Component {
  collectionName: 'components_components_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    icon: Attribute.Enumeration<['phone-icon', 'mail-icon', 'map-icon']>;
    contactLink: Attribute.Component<'components.link', true>;
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
    url: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    page: Attribute.Relation<'components.link', 'oneToOne', 'api::page.page'>;
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

export interface ComponentsSocialLinkImage extends Schema.Component {
  collectionName: 'components_components_social_link_images';
  info: {
    displayName: 'socialLink';
    description: '';
  };
  attributes: {
    icon: Attribute.Enumeration<
      ['facebook', 'instagram', 'twitter', 'youtube']
    > &
      Attribute.Required;
    url: Attribute.String & Attribute.Required;
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
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text & Attribute.Required;
    copyrightText: Attribute.Blocks;
    footerLinks: Attribute.Component<'components.link', true>;
    navigation: Attribute.Component<'components.link', true>;
    socialLinks: Attribute.Component<'components.social-link-image', true>;
    contact: Attribute.Component<'components.contact', true>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Navigation';
    description: '';
  };
  attributes: {
    logoText: Attribute.Component<'components.link'> & Attribute.Required;
    logo: Attribute.Media<'images'> & Attribute.Required;
    ctaButton: Attribute.Component<'components.link'>;
    navLinks: Attribute.Component<'components.link', true> & Attribute.Required;
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

export interface SectionsNewsletterSection extends Schema.Component {
  collectionName: 'components_sections_newsletter_sections';
  info: {
    displayName: 'Newsletter Section';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.String & Attribute.Required;
    checkboxTermsLabel: Attribute.Blocks & Attribute.Required;
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
      'components.contact': ComponentsContact;
      'components.course': ComponentsCourse;
      'components.feature': ComponentsFeature;
      'components.instructor': ComponentsInstructor;
      'components.link': ComponentsLink;
      'components.reviews': ComponentsReviews;
      'components.social-link-image': ComponentsSocialLinkImage;
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
      'sections.newsletter-section': SectionsNewsletterSection;
      'sections.reviews-section': SectionsReviewsSection;
    }
  }
}
