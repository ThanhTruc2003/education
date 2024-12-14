import React from 'react';
import { useEffect } from 'react';
import qs from 'qs';

function Video() {
    const query = qs.stringify({
        filters: {
          $and: [
            { course_categories: { $eq: 76 } },
            { course_categories: { $eq: 79 } },
            { course_categories: { $eq: 77 } },
            { course_categories: { $eq: 71 } },
          ],
        },
        populate: '*',
      }, {
        encodeValuesOnly: true, // prettify URL encoding
      });
      const url = `http://localhost:1337/api/lessons?${query}`;

      useEffect(() => {
          document.title = 'Tiểu học';
          fetchCategories();
        }, []);
      
        const fetchCategories = async () => {
          try {
            // Trước tiên lấy category có name = "Tiểu học"
            const categoryResponse = await fetch(url);
            const categoryData = await categoryResponse.json()
            console.log(categoryData);
          } catch (error) {
            console.error('Lỗi khi tải dữ liệu:', error);
          }
        };
  return (
    <>
    </>
  );
}

export default Video;