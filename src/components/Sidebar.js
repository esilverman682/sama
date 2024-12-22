import { useState, useEffect } from "react";
import styles from './Sidebar.module.css';
import Link from 'next/link';

{/* <Link href="/form/ContactForm/">
  <a>Contact Form</a>
</Link> */}

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
        <li><Link href="/form/ContactForm">ContactForm</Link></li>
        <li><Link href="/form/fileupload">File Upload</Link></li>
        <li><Link href="/form/Hidden">Multiselct</Link></li>
        <li><Link href="/form/Pagelist">Pagelist</Link></li>
        <li><Link href="/form/Postlist">PostList</Link></li>
        <li><Link href="/Business_financing/financing"> Business Financing </Link></li>
        <li><Link href="/Stepper/Createstepper"> MultistepForm </Link></li>
        {/* <li><a href="/form/SignatureForm">SignatureForm</a></li> */}
        {/* <li><a href="/form/fileupload">FileUpload</a></li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
