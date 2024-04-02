import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
      <aside>
        <span className="text-4xl font-[600]">知の泉</span>
        <p className="font-bold">
          Developed by Jin Dev <br />
          Building websites for fun since 2023
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FaFacebookF className="text-xl"/>
          </a>
          <a>
            <FaGithub className="text-xl"/>
          </a>

        </div>
      </nav>
    </footer>
  );
}
