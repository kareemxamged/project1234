// أنواع البيانات لقاعدة البيانات
// Database types

export interface GalleryItem {
  id: number;
  title: string;
  title_en?: string;
  description?: string;
  description_en?: string;
  image_url: string;
  image?: string; // للتوافق مع تنسيق App.tsx
  category: string;
  category_en?: string;
  student_name: string;
  student_name_en?: string;
  instructor: string;
  instructor_en?: string;
  completion_date: string;
  featured: boolean;
  visible: boolean;
  skill_level: 'مبتدئ' | 'متوسط' | 'متقدم';
  skill_level_en?: 'Beginner' | 'Intermediate' | 'Advanced';
  created_at?: string;
  updated_at?: string;
}

export interface Course {
  id: number;
  title: string;
  title_en?: string;
  description?: string;
  description_en?: string;
  duration: string;
  duration_en?: string;
  level_name: string;
  level_name_en?: string;
  price?: number;
  currency: string;
  show_price: boolean;
  image_url?: string;
  features?: string[];
  features_en?: string[];
  instructor: string;
  instructor_en?: string;
  category: string;
  category_en?: string;
  enrollment_url?: string;
  visible: boolean;
  featured: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Instructor {
  id: number;
  name: string;
  name_en?: string;
  title: string;
  title_en?: string;
  image_url?: string;
  profile_url?: string;
  experience?: string;
  experience_en?: string;
  specialties?: string[];
  specialties_en?: string[];
  rating: number;
  students_count: number;
  description?: string;
  description_en?: string;
  visible: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface DrawingTechnique {
  id: number;
  title: string;
  title_en?: string;
  description?: string;
  description_en?: string;
  content: string;
  content_en?: string;
  difficulty_level: 'مبتدئ' | 'متوسط' | 'متقدم';
  difficulty_level_en?: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  category_en?: string;
  tools_needed?: string[];
  tools_needed_en?: string[];
  steps?: string[];
  steps_en?: string[];
  tips?: string[];
  tips_en?: string[];
  image_url?: string;
  video_url?: string;
  estimated_time?: string;
  estimated_time_en?: string;
  prerequisites?: string[];
  prerequisites_en?: string[];
  related_techniques?: number[];
  featured: boolean;
  visible: boolean;
  view_count: number;
  created_at?: string;
  updated_at?: string;
}
