"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Moon,
  Sun,
  MapPin,
  Calendar,
  Award,
  Users,
  Code,
  Briefcase,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TubaPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const projects = [
    {
      title: "PhysicsVerse - Virtual Physics Lab",
      description:
        "A web-based interactive lab for simulating real-time physics experiments with collaborative learning features, real-time communication using Socket.io, and classroom management tools.",
      image: "https://via.placeholder.com/500x300/ec4899/ffffff?text=PhysicsVerse",
      tags: ["React", "Node.js", "Socket.io", "MVC Architecture", "Physics Simulation"],
      type: "Final Year Project",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Pizzerian - Pizza Shop Management",
      description:
        "Desktop application with complete CRUD operations, user authentication, cart management, and order processing system built with C# Windows Forms and SQL database.",
      image: "https://via.placeholder.com/500x300/8b5cf6/ffffff?text=Pizzerian",
      tags: ["C#", "Windows Forms", "SQL", "CRUD Operations", "Desktop App"],
      type: "Desktop Application",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Airline Management System",
      description:
        "Comprehensive airline management system implementing various data structures including linked lists, arrays, queues, and stacks for efficient flight and passenger management.",
      image: "https://via.placeholder.com/500x300/3b82f6/ffffff?text=Airline+Management",
      tags: ["C++", "Data Structures", "File Handling", "Algorithms", "System Design"],
      type: "Academic Project",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "React Native Mobile Apps",
      description:
        "Collection of mobile applications including To-Do List, Contact List, Note App, and Recipe App with modern UI/UX design and cross-platform compatibility.",
      image: "https://via.placeholder.com/500x300/10b981/ffffff?text=Mobile+Apps",
      tags: ["React Native", "JavaScript", "JSX", "Mobile UI", "Cross-platform"],
      type: "Mobile Development",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Web Development Projects",
      description:
        "Various web applications including Resume website, To-Do List, and Contact List built with modern web technologies and responsive design principles.",
      image: "https://via.placeholder.com/500x300/f59e0b/ffffff?text=Web+Projects",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Laravel", "Responsive Design"],
      type: "Web Development",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const skills = {
    technical: ["JavaScript", "React", "Next.js", "Node.js", "C#", "C++", "Java", "HTML/CSS"],
    tools: ["Visual Studio Code", "GitHub", "Figma", "SQL Server", "Windows Forms"],
    soft: ["Communication", "Leadership", "Teamwork", "Time Management"],
  }

  const experience = [
    {
      title: "Web-App Developer Intern",
      company: "PITB, Regional Plan 9 cohort2",
      period: "March 2025 - June 2025",
      description:
        "Developed and maintained web applications, collaborating with the development team to implement responsive designs and enhance user experience using modern web technologies including React, Next.js, and Node.js.",
      current: true,
    },
  ]

  const achievements = [
    "Merit Scholarship Recipient - COMSATS University Islamabad",
    "3rd Position in District Level Speech Competition - CM Punjab Speech and Essay Writing Competitions (2015)",
    "Teaching and Training Certificate - Pakistan Girl Guides Association (2023)",
    "Techolic Certificate - Technology Awareness and Participation (2023)",
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/20 transition-all duration-500">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg z-50 border-b border-rose-200/50 dark:border-slate-700/50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Tuba Jabeen
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-200"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  Contact
                </button>

                {/* Theme Toggle */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="hover:bg-rose-100 dark:hover:bg-slate-800 transition-colors duration-200"
                >
                  {isDarkMode ? (
                    <Sun className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Moon className="h-5 w-5 text-slate-600" />
                  )}
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="hover:bg-rose-100 dark:hover:bg-slate-800"
                >
                  {isDarkMode ? (
                    <Sun className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Moon className="h-5 w-5 text-slate-600" />
                  )}
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-rose-200/50 dark:border-slate-700/50">
                <div className="flex flex-col space-y-4">
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-left text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-200"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-left text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="text-left text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-left text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-200"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-left text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                  >
                    Contact
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center py-20">
              <div className="mb-8">
                <div className="relative inline-block">
                  <Image
                    src="public\profilePic.jpg"
                    alt="Tuba Jabeen"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto border-4 border-white dark:border-slate-700 shadow-2xl shadow-rose-500/20 dark:shadow-purple-500/20 transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Tuba Jabeen
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 max-w-3xl mx-auto">
                 Full-stack Software Engineer & Fresh Computer Science Graduate
                </p>
                <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                  Passionate about creating innovative web solutions with a strong foundation in modern technologies
                </p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("projects")}
                    className="bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 hover:from-rose-700 hover:via-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 hover:bg-rose-50 dark:hover:bg-slate-800 transform hover:scale-105 transition-all duration-200 bg-transparent"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-rose-500" />
                    <span>Islamabad, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-purple-500" />
                    <span>self-employed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-indigo-500" />
                    <span>CGPA: 3.54/4.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Fresh Computer Science graduate with hands-on experience and a passion for web development
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-rose-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                      <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        Bachelor of Science in Computer Science
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">COMSATS University Islamabad</p>
                      <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          2021 - 2025
                        </span>
                        <span className="font-medium text-rose-600 dark:text-rose-400">CGPA: 3.54/4.00</span>
                      </div>
                      <div className="pt-2">
                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">Relevant Courses:</p>
                        <div className="flex flex-wrap gap-1">
                          {[
                            "Machine Learning",
                            "Web Development",
                            "Computer Vision",
                            "Data Structures",
                            "AI",
                            "HCI",
                            "OS",
                          ].map((course) => (
                            <Badge
                              key={course}
                              variant="secondary"
                              className="text-xs bg-white/50 dark:bg-slate-600/50"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-indigo-50 to-rose-50 dark:from-slate-800 dark:to-slate-700 hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-lg flex items-center justify-center">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      Technical Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                          Programming Languages & Frameworks
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skills.technical.map((skill) => (
                            <Badge
                              key={skill}
                              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-200"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white mb-2">Tools & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {skills.tools.map((tool) => (
                            <Badge
                              key={tool}
                              variant="outline"
                              className="border-indigo-200 dark:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200"
                            >
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white mb-2">Soft Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {skills.soft.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-rose-100 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-900/40 transition-all duration-200"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-gradient-to-br from-rose-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
                      <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-indigo-500 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      Extracurriculars
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">
                          Google Developer Student Club (GDSC) - Active participant in tech sessions
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">Member, Soft-Tech Society - Participated in multiple events</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Currently gaining hands-on experience in web development
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {experience.map((exp, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl bg-gradient-to-br from-white to-rose-50 dark:from-slate-800 dark:to-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-slate-900 dark:text-white flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-purple-600 dark:text-purple-400 mt-1">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge
                          className={`${exp.current ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400" : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"}`}
                        >
                          {exp.period}
                        </Badge>
                        {exp.current && (
                          <p className="text-xs text-green-600 dark:text-green-400 mt-1 font-medium">
                            Current Position
                          </p>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                A showcase of my academic and personal projects demonstrating various technologies and skills
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group border-0 shadow-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-slate-700 backdrop-blur-sm">{project.type}</Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="bg-white/90 text-slate-700 hover:bg-white backdrop-blur-sm" asChild>
                        <Link href={project.liveUrl}>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" className="bg-white/90 text-slate-700 hover:bg-white backdrop-blur-sm" asChild>
                        <Link href={project.githubUrl}>
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-rose-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className={`text-xs transition-all duration-200 hover:scale-105 ${
                            tagIndex % 3 === 0
                              ? "border-rose-200 dark:border-rose-700 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                              : tagIndex % 3 === 1
                                ? "border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                                : "border-indigo-200 dark:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                          }`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Let's Connect</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                I'm always interested in new opportunities and exciting projects. Let's work together!
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="text-center p-6 border-0 shadow-xl bg-gradient-to-br from-rose-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-lg">Email</h3>
                  <p className="text-slate-600 dark:text-slate-300">tubajabeen105@gmail.com</p>
                </Card>

                <Card className="text-center p-6 border-0 shadow-xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Linkedin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-lg">LinkedIn</h3>
                  <p className="text-slate-600 dark:text-slate-300">tuba-jabeen-21993a223</p>
                </Card>

                <Card className="text-center p-6 border-0 shadow-xl bg-gradient-to-br from-indigo-50 to-rose-50 dark:from-slate-800 dark:to-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-lg">Phone</h3>
                  <p className="text-slate-600 dark:text-slate-300">+92334-5605064</p>
                </Card>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 hover:from-rose-700 hover:via-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-xl text-lg px-8 py-4"
                  asChild
                >
                  <Link href="mailto:tubajabeen105@gmail.com">
                    <Mail className="mr-2 h-6 w-6" />
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-rose-200/50 dark:border-slate-700/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-slate-600 dark:text-slate-300">
              © 2024 Tuba Jabeen. Built with Next.js, React, and Tailwind CSS.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Languages: English (Fluent) • Urdu (Native) 
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
