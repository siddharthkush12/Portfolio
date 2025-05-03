import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Button from "./Button";
import { Timeline } from "./ui/timeline";
import ButtonRotatingBackgroundGradient from "./ui/ButtonRotatingBackgroundGradient";
import { useNavigate } from "react-router";

function Projects() {
  const navigate = useNavigate();

  const data = [
    {
      title: "April 2025",
      content: (
        <div className="bg-white rounded-2xl max-w-5xl mx-auto">
          <p className="mb-2 text-base md:text-xl font-semibold text-neutral-800">
            {PROJECTS[0].title}
          </p>
          <p className="mb-2 text-sm md:text-base text-neutral-600 ">
            {PROJECTS[0].description}
          </p>
          <div className="text-sm md:text-base text-neutral-700 my-4">
            <div className="flex flex-wrap gap-2">
              {PROJECTS[0].technologies.map((tech, idx) => {
                return (
                  <div
                    key={idx}
                    className="border py-1 px-2 md:py-2 md:px-4 text-sm md:text-md border-gray-400 rounded-full"
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-sm md:text-base text-neutral-700">
            <div>
              <strong>🏪 Landing Page = Shop Listing:</strong>
              <p className="ml-4">
                Accessible even before login to enhance user discovery.
              </p>
            </div>
            <div>
              <strong>🔐 Authentication & Authorization:</strong>
              <p className="ml-4">
                JWT-based access + refresh token system with role-based access
                for User, Seller, and Admin.
              </p>
            </div>
            <div>
              <strong>📍 Google Maps Integration:</strong>
              <p className="ml-4">
                Seller shop locations mapped using @react-google-maps/api.
              </p>
            </div>
            <div>
              <strong>🛍️ Shopping Features:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Redux-managed Cart, Wishlist, and Filters</li>
                <li>Product variants & quantity handling</li>
                <li>Fully responsive, mobile-first UI</li>
              </ul>
            </div>
            <div>
              <strong>🧑‍💼 Seller Dashboard:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Product management (CRUD)</li>
                <li>Order tracking & earning summary</li>
              </ul>
            </div>
            <div>
              <strong>⚙️ Admin Panel:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Manage users, shops, and products</li>
                <li>Delete or update any platform entity</li>
              </ul>
            </div>
            <div>
              <strong>💳 Payment Integration:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Live Razorpay payments</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 w-full flex justify-center">
            <ProjectCard cardItem={PROJECTS[0]} />
          </div>
          <div className="flex gap-2 items-center mt-2">
            <a href={PROJECTS[0].link} target="_blank">
              <ButtonRotatingBackgroundGradient buttontext={"Visit Closify"} />
            </a>
            <a href={PROJECTS[0].git} target="_blank">
              <ButtonRotatingBackgroundGradient
                buttontext={"Explore on GitHub"}
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "2025 (Still Working)",
      content: (
        <div className="bg-white rounded-2xl max-w-5xl mx-auto">
          <p className="mb-2 text-base md:text-xl font-semibold text-neutral-800">
            {PROJECTS[3].title}
          </p>
          <p className="mb-2 text-sm md:text-base text-neutral-600 ">
            {PROJECTS[3].description}
          </p>
          <div className="text-sm md:text-base text-neutral-700 my-4">
            <div className="flex flex-wrap gap-2">
              {PROJECTS[3].technologies.map((tech, idx) => {
                return (
                  <div
                    key={idx}
                    className="border py-1 px-2 md:py-2 md:px-4 text-sm md:text-md border-gray-400 rounded-full"
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 w-full flex justify-center">
            <ProjectCard cardItem={PROJECTS[3]} />
          </div>
          <div className="flex gap-2 items-center mt-2">
            <a href={PROJECTS[3].git} target="_blank">
              <ButtonRotatingBackgroundGradient
                buttontext={"Explore on GitHub"}
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Febuary 2025",
      content: (
        <div className="bg-white rounded-2xl max-w-5xl mx-auto">
          <p className="mb-2 text-base md:text-xl font-semibold text-neutral-800">
            {PROJECTS[1].title}
          </p>
          <p className="mb-6 text-sm md:text-base text-neutral-600 ">
            {PROJECTS[1].description}
          </p>

          <div className="text-sm md:text-base text-neutral-700 my-4">
            <div className="flex flex-wrap gap-2">
              {PROJECTS[1].technologies.map((tech, idx) => {
                return (
                  <div
                    key={idx}
                    className="border py-1 px-2 md:py-2 md:px-4 text-sm md:text-md border-gray-400 rounded-full"
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 w-full flex justify-center">
            <ProjectCard cardItem={PROJECTS[1]} />
          </div>
          <div className="flex gap-2 items-center mt-2">
            <a href={PROJECTS[1].link} target="_blank">
              <ButtonRotatingBackgroundGradient buttontext={"MY PORTFOLIO"} />
            </a>
            <a href={PROJECTS[1].git} target="_blank">
            <ButtonRotatingBackgroundGradient
              buttontext={"Explore on GitHub"}
            />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "December 2024",
      content: (
        <div className="bg-white rounded-2xl max-w-5xl mx-auto">
          <p className="mb-2 text-base md:text-xl font-semibold text-neutral-800">
            {PROJECTS[4].title}
          </p>
          <p className="mb-6 text-sm md:text-base text-neutral-600 ">
            {PROJECTS[4].description}
          </p>

          <div className="text-sm md:text-base text-neutral-700 my-4">
            <div className="flex flex-wrap gap-2">
              {PROJECTS[4].technologies.map((tech, idx) => {
                return (
                  <div
                    key={idx}
                    className="border py-1 px-2 md:py-2 md:px-4 text-sm md:text-md border-gray-400 rounded-full"
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 w-full flex justify-center">
            <ProjectCard cardItem={PROJECTS[4]} />
          </div>
          <div className="flex gap-2 items-center mt-2">
            <a href={PROJECTS[4].git} target="_blank">
            <ButtonRotatingBackgroundGradient
              buttontext={"Explore on GitHub"}
            />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "December 2024",
      content: (
        <div className="bg-white rounded-2xl max-w-5xl mx-auto">
          <p className="mb-2 text-base md:text-xl font-semibold text-neutral-800">
            {PROJECTS[2].title}
          </p>
          <p className="mb-6 text-sm md:text-base text-neutral-600 ">
            {PROJECTS[2].description}
          </p>

          <div className="text-sm md:text-base text-neutral-700 my-4">
            <div className="flex flex-wrap gap-2">
              {PROJECTS[2].technologies.map((tech, idx) => {
                return (
                  <div
                    key={idx}
                    className="border py-1 px-2 md:py-2 md:px-4 text-sm md:text-md border-gray-400 rounded-full"
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 w-full flex justify-center">
            <ProjectCard cardItem={PROJECTS[2]} />
          </div>
          <div className="flex gap-2 items-center mt-2">
            <a href={PROJECTS[2].git} target="_blank">
            <ButtonRotatingBackgroundGradient
              buttontext={"Explore on GitHub"}
            />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "December 2024",
      content: (
        <div className="bg-white rounded-2xl max-w-5xl mx-auto">
          <p className="mb-2 text-base md:text-xl font-semibold text-neutral-800">
            {PROJECTS[5].title}
          </p>
          <p className="mb-6 text-sm md:text-base text-neutral-600 ">
            {PROJECTS[5].description}
          </p>

          <div className="text-sm md:text-base text-neutral-700 my-4">
            <div className="flex flex-wrap gap-2">
              {PROJECTS[5].technologies.map((tech, idx) => {
                return (
                  <div
                    key={idx}
                    className="border py-1 px-2 md:py-2 md:px-4 text-sm md:text-md border-gray-400 rounded-full"
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 w-full flex justify-center">
            <ProjectCard cardItem={PROJECTS[5]} />
          </div>
          <div className="flex gap-2 items-center mt-2">
            <a href={PROJECTS[5].git} target="_blank">
            <ButtonRotatingBackgroundGradient
              buttontext={"Explore on GitHub"}
            />
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </>
  );
}

export default Projects;
