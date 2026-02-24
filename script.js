const allJobsData = [
  {
    id: 1,
    companyName: "Northwind Labs",
    position: "Frontend Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$95K - $120K",
    description: "Build reusable dashboard components and collaborate with product designers.",
    status: "",
  },
  {
    id: 2,
    companyName: "BrightCart",
    position: "Product Designer",
    location: "Remote, US",
    type: "Contract",
    salary: "$70/hr",
    description: "Design user flows for checkout and account management experiences.",
    status: "",
  },
  {
    id: 3,
    companyName: "Skyward Systems",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$110K - $135K",
    description: "Develop APIs for order processing and performance-sensitive reporting.",
    status: "",
  },
  {
    id: 4,
    companyName: "Pulse AI",
    position: "ML Engineer",
    location: "San Jose, CA",
    type: "Full-time",
    salary: "$140K - $170K",
    description: "Train and deploy ranking models that improve candidate-job matching.",
    status: "",
  },
  {
    id: 5,
    companyName: "Atlas Finance",
    position: "QA Automation Engineer",
    location: "Chicago, IL",
    type: "Hybrid",
    salary: "$90K - $108K",
    description: "Expand automated end-to-end coverage for critical payment workflows.",
    status: "",
  },
  {
    id: 6,
    companyName: "Nimbus Health",
    position: "Data Analyst",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$82K - $98K",
    description: "Create stakeholder dashboards for patient retention and engagement trends.",
    status: "",
  },
  {
    id: 7,
    companyName: "BlueDock Logistics",
    position: "Operations Manager",
    location: "Denver, CO",
    type: "On-site",
    salary: "$88K - $101K",
    description: "Lead warehouse process improvements and weekly KPI reporting cadence.",
    status: "",
  },
  {
    id: 8,
    companyName: "RedPeak Mobile",
    position: "iOS Developer",
    location: "Remote, US",
    type: "Full-time",
    salary: "$118K - $145K",
    description: "Ship new subscription features and optimize app startup performance.",
    status: "",
  },
];

let selectedTabName = "all";

const totalCountText = document.getElementById("totalCount");
const interviewCountText = document.getElementById("interviewCount");
const rejectedCountText = document.getElementById("rejectedCount");
const currentTabJobsCountText = document.getElementById("tabCount");

const allTabButton = document.getElementById("allBtn");
const interviewTabButton = document.getElementById("interviewBtn");
const rejectedTabButton = document.getElementById("rejectedBtn");

const jobsContainerBox = document.getElementById("jobList");
const emptyStateBox = document.getElementById("emptyBox");

function makeTabActive(oneButton) {
  allTabButton.classList.remove("border-blue-500", "bg-blue-500", "text-white");
  allTabButton.classList.add("border-slate-200", "bg-white", "text-slate-500");

  interviewTabButton.classList.remove("border-blue-500", "bg-blue-500", "text-white");
  interviewTabButton.classList.add("border-slate-200", "bg-white", "text-slate-500");

  rejectedTabButton.classList.remove("border-blue-500", "bg-blue-500", "text-white");
  rejectedTabButton.classList.add("border-slate-200", "bg-white", "text-slate-500");

  oneButton.classList.remove("border-slate-200", "bg-white", "text-slate-500");
  oneButton.classList.add("border-blue-500", "bg-blue-500", "text-white");
}

