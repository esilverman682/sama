import { useState, useEffect } from "react";
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resizing for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Trigger initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={isMobile ? styles.sidebarStatic : styles.sidebarFixed}>
      <ul>
        {/* <li><a href="/form/newform">Form Creation_old</a></li>
        <li><a href="/form/Entries">Form Creation New</a></li> */}
         {/* <li><a href="/form/login">Login</a></li> */}
        <li><a href="/form/ContactForm">ContactForm</a></li>
        <li><a href="/form/fileupload">File Upload</a></li>
        <li><a href="/form/Hidden">Multiselct</a></li>
        <li><a href="/form/Pagelist">Pagelist</a></li>
        <li><a href="/form/Postlist">PostList</a></li>
        <li><a href="/Business_financing/financing">Business Financing</a></li>
        <li><a href="/Stepper/Createstepper">MultistepForm</a></li>
        {/* <li><a href="/form/SignatureForm">SignatureForm</a></li> */}
        {/* <li><a href="/form/fileupload">FileUpload</a></li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
