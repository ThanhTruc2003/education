import { useEffect, useState } from "react";

function DocumentFilter({ setBooks }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedClass, setExpandedClass] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);

  const toggleExpand = (event, documentId) => {
    event.preventDefault();
    setExpandedClass(expandedClass === documentId ? null : documentId);
  };

  const handleContentSelect = (event, content) => {
    event.preventDefault();
    setSelectedContent(content);
  };

  useEffect(() => {
    const getBookByCategories = async (categoriesIds) => {
      const response = await fetch(
        `http://localhost:1337/api/docs?filters[$and][0][document_categories][$eq]=${categoriesIds[0]}&filters[$and][1][document_categories][$eq]=${categoriesIds[1]}&populate=*`
      );
      const data = await response.json();;
      setBooks(data.data);
    };
    getBookByCategories(selectedCategories);
  }, [selectedCategories]);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      const response = await fetch(
        "http://localhost:1337/api/document-categories?filters[parents][$null]=true&populate[0]=children&populate[1]=children.children&sort[0]=priority:asc"
      );
      const data = await response.json();
      setCategories(data?.data || []);
      setIsLoading(false);
    };
    fetchCategories();
  }, []);
  return (
    <div className="col-lg-3 wow fadeIn" data-wow-delay="0.1s">
      <div className="sidebar bg-light p-4 rounded border border-2 border-primary">
        <h4
          className="text-white mb-4 pb-2 border-bottom border-primary bg-primary p-2 rounded"
          style={{ textAlign: "center" }}
        >
          Danh mục tài liệu
        </h4>

        {isLoading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Đang tải...</span>
            </div>
          </div>
        ) : (
          categories.map((mainCategory) => (
            <div
              key={mainCategory.id}
              className="mb-4 wow fadeIn"
              data-wow-delay="0.2s"
            >
              <h5 className="border-bottom border-secondary pb-2">
                {mainCategory.name}
              </h5>
              <div className="nav flex-column">
                {mainCategory.children
                  .sort((a, b) => {
                    // Lấy số lớp từ tên (ví dụ: "Lớp 3" -> 3)
                    const getGradeNumber = (name) =>
                      parseInt(name.replace("Lớp ", ""));
                    return getGradeNumber(a.name) - getGradeNumber(b.name);
                  })
                  .map((grade) => {
                    return (
                      <div key={grade.id}>
                      <a
                        href=""
                        className="nav-link text-dark border-bottom border-light py-2 ps-3 hover-bg"
                        onClick={(event) =>
                        toggleExpand(event, grade.documentId)
                        }
                      >
                        {grade.name}
                        <i
                        className={`fas ${
                          expandedClass === grade.documentId
                          ? "fa-angle-down"
                          : "fa-angle-right"
                        } ms-2`}
                        ></i>
                      </a>
                      {expandedClass === grade.documentId && (
                        <div className="nav flex-column ps-4">                   
                        {grade.children.map((subCat) => (
                          <a
                          key={subCat.id}
                          href=""
                          className={`nav-link text-dark border-bottom border-light py-2 ps-3 hover-bg ${
                            selectedContent ===
                            `${grade.name}_${subCat.name}`
                            ? 'active' : ''
                          }`}
                          
                          onClick={(event) => {
                            event.preventDefault();
                            setSelectedContent(`${grade.name}_${subCat.name}`);
                            setSelectedCategories([grade.id, subCat.id]);
                          }}
                          >
                          {subCat.name}
                          </a>
                        ))}
                        </div>
                      )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DocumentFilter;
