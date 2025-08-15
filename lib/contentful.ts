import client from './client';
import { NewsPost, Ministry, Media, Events, Project } from './types';


class ContentfulService {
  // Fetch all ministries
  async getMinistries(): Promise<Ministry[]> {
    try {
      const response = await client.getEntries({
        content_type: 'ministry',
        order: ['fields.ministryName'],
      });
      
      return response.items as unknown as Ministry[];
    } catch (error) {
      console.error('Error fetching ministries:', error);
      return [];
    }
  }

  async getBlogsByMinistry(ministryId: string): Promise<NewsPost[]> {
    try {
      const response = await client.getEntries({
        content_type: 'blogs',
        'fields.ministry.sys.id': ministryId,
        order: ['-sys.createdAt'],
        include: 2,
      });
      
      return response.items as unknown as NewsPost[];
    } catch (error) {
      console.error('Error fetching blogs by ministry:', error);
      return [];
    }
  }

  async getBlogByMinistrySlug(slug: string): Promise<NewsPost | null> {
    try {
      const response = await client.getEntries({
        content_type: 'blogs',
        'fields.ministry.fields.slug': slug,
        include: 2,
        limit: 1,
      });
      
      return response.items[0] as unknown as NewsPost || null;
    } catch (error) {
      console.error('Error fetching blog by ministry slug:', error);
      return null;
    }
  }

  // Fetch all blogs
  async getAllBlogs(): Promise<NewsPost[]> {
    try {
      const response = await client.getEntries({
        content_type: 'blogs',
        order: ['-sys.createdAt'],
        include: 2, // Include linked entries (ministry, author)
      });
      
      return response.items as unknown as NewsPost[];
    } catch (error) {
      console.error('Error fetching all blogs:', error);
      return [];
    }
  }

  // Fetch a single blog post by slug
  async getBlogBySlug(slug: string): Promise<NewsPost | null> {
    try {
      const response = await client.getEntries({
        content_type: 'blogs',
        'fields.slug': slug,
        include: 2,
        limit: 1,
      });
      
      return response.items[0] as unknown as NewsPost || null;
    } catch (error) {
      console.error('Error fetching blog by slug:', error);
      return null;
    }
  }

  

  // Fetch a ministry by slug
  async getMinistryBySlug(slug: string): Promise<Ministry | null> {
    try {
      const response = await client.getEntries({
        content_type: 'ministry',
        'fields.slug': slug,
        include: 2,
        limit: 1,
      });
      
      return response.items[0] as unknown as Ministry || null;
    } catch (error) {
      console.error('Error fetching ministry by slug:', error);
      return null;
    }
  }

  async getMediaByMinistryId(id: string): Promise<Media | null> {
    try {
      const response = await client.getEntries({
        content_type: 'media',
        "fields.ministry.sys.id[exists]": true,
        'fields.ministry.sys.id': id,
        include: 1,
        
      });

      const result = response.items.map((i)=>{
        return {
          title: i.fields.title,
          img: i.fields.img,
          isVideo: i.fields.isVideo,
          ministry: i.fields.ministry,
          id: i.sys.id,
          ministryId: i.fields.ministry,
          i
        }
      })
      return response.items as unknown as Media || null;
    } catch (error) {
      console.error('Error fetching media by ministry id:', error);
      return null;
    }
  }
  async getEventsByMinistryId(id: string): Promise<Events[] | null> {
    try {
      const response = await client.getEntries({
        content_type: 'events',
        "fields.ministry.sys.id[exists]": true,
        'fields.ministry.sys.id': id,
        include: 1,
        
      });

      // const result = response.items.map((i)=>{
      //   return {
      //     title: i.fields.title,
      //     img: i.fields.img,
      //     isVideo: i.fields.isVideo,
      //     ministry: i.fields.ministry,
      //     id: i.sys.id,
      //     ministryId: i.fields.ministry,
      //     i
      //   }
      // })
      return response.items as unknown as Events[] || null;
    } catch (error) {
      console.error('Error fetching events by ministry id:', error);
      return null;
    }
  }
  async getProjectsByMinistryId(id: string): Promise<Project[] | null> {
    try {
      const response = await client.getEntries({
        content_type: 'projects',
        "fields.ministry.sys.id[exists]": true,
        'fields.ministry.sys.id': id,
        include: 1,
        
      });

      // const result = response.items.map((i)=>{
      //   return {
      //     title: i.fields.title,
      //     img: i.fields.img,
      //     isVideo: i.fields.isVideo,
      //     ministry: i.fields.ministry,
      //     id: i.sys.id,
      //     ministryId: i.fields.ministry,
      //     i
      //   }
      // })
      return (response.items as unknown as Project[]) || null;
    } catch (error) {
      console.error('Error fetching projects by ministry id:', error);
      return null;
    }
  }
}

// Export an instance to maintain the same usage pattern
export const contentfulService = new ContentfulService(); 