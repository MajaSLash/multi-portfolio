import { Component } from "@angular/core";

export interface FeatureArticle {
  image: string;
  title: string;
  description: string;
  link: string;
}

export interface SpotlightSection {
  id: string;
  styleClass: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  spotlights: SpotlightSection[] = [
    {
      id: "one",
      styleClass: "wrapper spotlight style1",
      image: "assets/images/headshot.jpg",
      title: "Software & DevOps Engineer",
      description:
        "As a Software and DevOps Engineer, I specialize in designing and implementing scalable software solutions while optimizing development workflows. With expertise in cloud technologies, containerization, and CI/CD pipelines, I ensure efficient deployment and maintenance of applications. My passion lies in creating robust systems that drive innovation and deliver exceptional user experiences.",
      link: "https://www.linkedin.com/in/zachary-whitaker-972433221/",
    },
    {
      id: "two",
      styleClass: "wrapper alt spotlight style2",
      image: "assets/images/librarymodel800.jpg",
      title: "Model & Actor",
      description:
        "In addition to my technical pursuits, I am also a model and actor. I have a passion for the arts and enjoy expressing myself through various creative mediums. Whether it's in front of the camera or on stage, I bring dedication and enthusiasm to every project I undertake in the world of modeling and acting.",
      link: "generic",
    },
    {
      id: "three",
      styleClass: "wrapper spotlight style3",
      image: "assets/images/fitness800.jpg",
      title: "Product & Fitness Influencer",
      description:
        "As a product and fitness influencer, I share my insights and experiences to inspire others on their wellness journeys. I review and promote products that align with a healthy lifestyle, while also providing fitness tips and motivation. My goal is to empower my audience to make informed choices and lead healthier, more active lives.",
      link: "elements",
    },
  ];

  features: FeatureArticle[] = [
    {
      image: "assets/images/facedata.jpg",
      title: "Person Identification from Face Images",
      description:
        "(Actual face dataset is restricted) Machine learning project that utilizes convolutional neural networks (CNNs) to accurately identify individuals from facial images, achieving high precision and recall rates through extensive training on a diverse dataset of labeled faces.",
      link: "https://github.com/MajaSLash/441PIFI",
    },
    {
      image: "assets/images/aidarustcode.jpg",
      title: "Artificial Intelligence Digital Assistant (A.I.D.A)",
      description:
        "Open source AI assistant built with natural language processing (NLP) techniques in Python, Rust, and Shell. Designed to provide users with self-data ownership and custom-tuned intelligent responses and assistance across various tasks, leveraging llama2 for seamless interaction.",
      link: "https://github.com/KhoaNguyen55/A.I.D.A",
    },
    {
      image: "assets/images/capstone2024highlevel.jpg",
      title: "Autonomous Laser Tag",
      description:
        "Directed and led 6 different development teams to design and build fully autonomous robots with advanced AI capabilities for indoor laser tag, utilizing intelligent navigation, targeting, and object detection within a simulated environment.",
      link: "https://github.com/MajaSLash/capstone2024/blob/main/Fall2024CapstonePoster_V3.pdf",
    },
    {
      image: "assets/images/moviereclist.jpg",
      title: "Movie Recommendation System (React)",
      description:
        "Fullstack application built with React and NodeJS that provides personalized movie recommendations based on user preferences and viewing history, utilizing collaborative filtering algorithms and a user-friendly interface for seamless interaction.",
      link: "https://github.com/MajaSLash/movie_list",
    },
  ];
}
