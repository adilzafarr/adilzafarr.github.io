/*
  ============================================================
  YOUR CONTENT — edit this file to change anything on the site.
  ============================================================
  • Text in "quotes" is shown on the page. Keep the quotes and commas.
  • To add a project / job / degree / certificate: copy one { ... } block,
    paste it after a comma, and change the words.
  • To remove something: delete its whole { ... } block (and its comma).
  • Order on the page = order in this file.
  • Leave a field as "" to hide it.
*/

window.SITE = {
  name: "Adil Zafar",
  initials: "AZ",
  title: "Data & AI/ML Engineer",
  email: "[EMAIL]",

  // Links used in the nav, hero and footer. Put your CV file in the repo as cv.pdf.
  links: {
    cv: "cv.pdf",
    github: "https://github.com/[USERNAME]",
    linkedin: "https://www.linkedin.com/in/[USERNAME]"
  },

  hero: {
    label: "Data & AI/ML Engineer",
    headline: "I build the data pipelines that machine learning runs on.",
    intro: "I'm a data and AI/ML engineer. I design the pipelines, platforms and models that turn raw data into features, training sets and machine learning systems that hold up in production."
  },

  // The five-step diagram under the hero.
  pipeline: [
    { label: "01 · Sources",   text: "APIs, events, databases" },
    { label: "02 · Ingest",    text: "Batch & streaming" },
    { label: "03 · Transform", text: "Modelled, tested data" },
    { label: "04 · Features",  text: "Feature store, datasets" },
    { label: "05 · Model",     text: "Train, serve, monitor" }
  ],

  focus: {
    eyebrow: "What I do",
    heading: "Two disciplines, one pipeline.",
    cards: [
      { label: "Data", title: "Data engineering",
        text: "Warehouses, lakes, ETL/ELT and streaming systems. Designing schemas and pipelines that are fast, observable and trusted by the people downstream." },
      { label: "AI / ML", title: "AI & machine learning",
        text: "Training and evaluating models, building LLM-powered features, and taking ML from notebook to a service people rely on." },
      { label: "Where they meet", title: "Data engineering for ML", dark: true,
        text: "Feature pipelines, training-data platforms, embeddings and retrieval, MLOps. The part of ML most projects get wrong, and the part I enjoy most." }
    ]
  },

  // PROJECTS — "kind" creates the filter buttons automatically.
  // featured: true makes a card dark navy (use for your best one).
  projects: [
    {
      title: "[Feature platform project]",
      kind: "Data for ML",
      year: "[YEAR]",
      featured: true,
      summary: "[One or two sentences: the problem, what you built, and who uses it.]",
      metric: "[900ms → 120ms]",
      metricLabel: "[the result that mattered]",
      tags: ["Kafka", "Spark", "Feast", "Python"],
      link: "",           // case study / repo / demo URL ("" hides the link)
      linkText: "Read the case study →"
    },
    {
      title: "[LLM / RAG project]",
      kind: "AI / ML",
      year: "[YEAR]",
      summary: "[What the model does, the data behind it, and how you evaluated it.]",
      metric: "[METRIC]",
      metricLabel: "[what it measures]",
      tags: ["PyTorch", "Embeddings", "Vector DB"],
      link: "",
      linkText: "View on GitHub →"
    },
    {
      title: "[Warehouse / lakehouse project]",
      kind: "Data engineering",
      year: "[YEAR]",
      summary: "[The platform you designed, the volume it handles and the teams it serves.]",
      metric: "[METRIC]",
      metricLabel: "[e.g. rows / day]",
      tags: ["Airflow", "dbt", "Snowflake", "SQL"],
      link: "",
      linkText: "Read more →"
    },
    {
      title: "[Streaming pipeline project]",
      kind: "Data engineering",
      year: "[YEAR]",
      summary: "[What moved in real time, how you kept it reliable, and what it unlocked.]",
      metric: "[METRIC]",
      metricLabel: "[e.g. events / sec]",
      tags: ["Kafka", "Flink", "AWS"],
      link: "",
      linkText: "Read more →"
    }
  ],

  experience: {
    heading: "Where I've worked",
    intro: "Roles across data engineering and AI/ML, building the systems that connect the two.",
    items: [
      {
        dates: "[YEAR] — Present",
        role: "[Data & AI/ML Engineer]",
        company: "[Company]",
        summary: "[What you own today.]",
        highlights: ["[Achievement with a number]", "[Achievement with a number]"]
      },
      {
        dates: "[YEAR] — [YEAR]",
        role: "[Senior Data Engineer]",
        company: "[Company]",
        summary: "[Scope: the platforms, data volumes and teams you supported.]",
        highlights: ["[Achievement with a number]", "[Achievement with a number]"]
      },
      {
        dates: "[YEAR] — [YEAR]",
        role: "[Data Engineer]",
        company: "[Company]",
        summary: "[What you built and learned.]",
        highlights: ["[Achievement with a number]"]
      }
    ]
  },

  stack: [
    { name: "Data engineering",      items: ["Python", "SQL", "Spark", "Airflow", "dbt", "Kafka", "Snowflake", "BigQuery"] },
    { name: "Machine learning & AI", items: ["PyTorch", "scikit-learn", "Hugging Face", "LLMs", "RAG", "Vector DBs"] },
    { name: "MLOps",                 items: ["MLflow", "Feature stores", "Model serving", "Monitoring"] },
    { name: "Cloud & infra",         items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"] }
  ],

  education: {
    degrees: [
      { type: "Master's degree",   year: "[YEAR]", title: "[MS in Subject]", school: "[University name]", note: "[Focus, thesis or standout coursework]" },
      { type: "Bachelor's degree", year: "[YEAR]", title: "[BS in Subject]", school: "[University name]", note: "[Focus or standout coursework]" }
    ],
    certifications: [
      { issuer: "Udemy", year: "[YEAR]", title: "[Course name]", note: "[What it covered]", link: "" }
    ]
  },

  contact: {
    heading: "Have data that should be feeding a model? Let's talk."
  }
};
