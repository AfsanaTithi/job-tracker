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

function showAllDataOnScreen() {
  let cardHtmlText = "";

  const totalJobsNumber = allJobsData.length;
  let interviewJobsNumber = 0;
  let rejectedJobsNumber = 0;
  let jobsInCurrentTabNumber = 0;

  for (let i = 0; i < allJobsData.length; i++) {
    if (allJobsData[i].status === "interview") {
      interviewJobsNumber = interviewJobsNumber + 1;
    }

    if (allJobsData[i].status === "rejected") {
      rejectedJobsNumber = rejectedJobsNumber + 1;
    }
  }

  totalCountText.innerText = totalJobsNumber;
  interviewCountText.innerText = interviewJobsNumber;
  rejectedCountText.innerText = rejectedJobsNumber;

  for (let j = 0; j < allJobsData.length; j++) {
    const oneJob = allJobsData[j];

    if (selectedTabName === "interview" && oneJob.status !== "interview") {
      continue;
    }

    if (selectedTabName === "rejected" && oneJob.status !== "rejected") {
      continue;
    }

    jobsInCurrentTabNumber = jobsInCurrentTabNumber + 1;

    let statusShowText = "NOT APPLIED";
    let statusColorClassName = "bg-blue-100 text-blue-700";

    if (oneJob.status === "interview") {
      statusShowText = "INTERVIEW";
      statusColorClassName = "bg-emerald-100 text-emerald-600";
    }

    if (oneJob.status === "rejected") {
      statusShowText = "REJECTED";
      statusColorClassName = "bg-rose-100 text-rose-600";
    }

    let interviewButtonBorderClass = "";
    let rejectedButtonBorderClass = "";

    if (oneJob.status === "interview") {
      interviewButtonBorderClass = "border border-emerald-500";
    }

    if (oneJob.status === "rejected") {
      rejectedButtonBorderClass = "border border-rose-500";
    }

    cardHtmlText =
      cardHtmlText +
      '<div class="bg-white border border-slate-200 rounded-md p-4">' +
      '<div class="flex justify-between items-center">' +
      '<div>' +
      '<p class="m-0 text-[15px] font-bold text-blue-700">' +
      oneJob.companyName +
      "</p>" +
      '<p class="m-0 mt-1 text-xs text-slate-500">' +
      oneJob.position +
      "</p>" +
      "</div>" +
      '<button class="delete-btn text-slate-400 text-sm" data-id="' +
      oneJob.id +
      '">🗑</button>' +
      "</div>" +
      '<p class="m-0 mt-2 text-xs text-slate-500">' +
      oneJob.location +
      " • " +
      oneJob.type +
      " • " +
      oneJob.salary +
      "</p>" +
      '<span class="inline-block mt-2 px-2 py-1 rounded text-[10px] font-extrabold ' +
      statusColorClassName +
      '">' +
      statusShowText +
      "</span>" +
      '<p class="m-0 mt-2 text-[11px] leading-5 text-slate-500">' +
      oneJob.description +
      "</p>" +
      '<div class="mt-3 flex gap-2">' +
      '<button class="interview-btn h-6 px-2 rounded text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-600 ' +
      interviewButtonBorderClass +
      '" data-id="' +
      oneJob.id +
      '">Interview</button>' +
      '<button class="rejected-btn h-6 px-2 rounded text-[10px] font-extrabold uppercase bg-rose-100 text-rose-600 ' +
      rejectedButtonBorderClass +
      '" data-id="' +
      oneJob.id +
      '">Rejected</button>' +
      "</div>" +
      "</div>";
  }

  currentTabJobsCountText.innerText = jobsInCurrentTabNumber;

  if (jobsInCurrentTabNumber === 0) {
    jobsContainerBox.classList.add("hidden");
    emptyStateBox.classList.remove("hidden");
  } else {
    jobsContainerBox.classList.remove("hidden");
    emptyStateBox.classList.add("hidden");
  }

  jobsContainerBox.innerHTML = cardHtmlText;
}

allTabButton.addEventListener("click", function () {
  selectedTabName = "all";
  makeTabActive(allTabButton);
  showAllDataOnScreen();
});


showAllDataOnScreen();
