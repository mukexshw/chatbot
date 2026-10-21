// AS College Assistant — customized using the user's screenshots and official college pages.
// Rule-based responses; links in bot messages are rendered as clickable HTTPS links.

const COLLEGE = {
    phone: "01628-228470",
    email: "ascollegekhanna@gmail.com",
    address: "A.S. College, Samrala Road, Khanna (District Ludhiana), Punjab 141417",
    website: "https://www.asckhn.com/",
    admissions: "https://asckhn.com/page/admissions",
    fees: "https://www.asckhn.com/student-zone/fee-details",
    admissionRules: "https://asckhn.com/student-zone/admission-rules",
    admissionPortal: "https://admission.punjab.gov.in/",
    scholarships: "https://www.asckhn.com/policies/policy-for-financial-aid-to-the-students",
    library: "https://asckhn.com/student-zone/library-rules"
};

const answers = {
    courses: `A.S. College, Khanna — courses shown on the college admissions page\n\nUNDERGRADUATE (UG):\n• B.C.A. — 3 years\n• B.Com\n• B.Sc.\n• B.A.\n\nPOSTGRADUATE (PG):\n• M.Com — 2 years\n• M.Sc. Mathematics — 2 years\n• M.Sc. Chemistry — 2 years\n• M.A. English — 2 years\n• M.A. History — 2 years\n• M.A. Political Science — 2 years\n• M.A. Economics — 2 years\n• M.A. Punjabi — 2 years\n\nCourse availability can change by session. See the official admissions page: ${COLLEGE.admissions}` ,
    bca: `BCA stands for Bachelor of Computer Applications. The college admissions page lists BCA as a 3-year undergraduate programme.\n\nAdmission contact: Dr. Vivek Bhambri — 9855534289\nCollege office: ${COLLEGE.phone}\nOfficial course/admission details: ${COLLEGE.admissions}`,
    bcaFees: `BCA FEES — ESTIMATE FROM THE SCREENSHOT YOU PROVIDED\n₹60,130–₹62,815 total.\n\nImportant: this range is from your screenshot and is not confirmed as the official current fee. Please verify the exact amount, session and any additional charges on the college's official fee-details page: ${COLLEGE.fees}\n\nCollege office: ${COLLEGE.phone}`,
    fees: `FEES INFORMATION\n\nThe screenshot you provided shows these estimated total ranges (please verify them before relying on them):\n• B.A.: ₹17,980–₹29,211\n• B.Sc.: ₹20,140–₹33,779\n• B.Com / B.Com (Hons) / E-Commerce: ₹32,120–₹41,452\n• BCA: ₹60,130–₹62,815\n• M.Com / M.A. / M.Sc. / PG Diplomas: around ₹4,606 and varies by programme\n• B.Voc.: ₹70,343–₹1,06,000\n\nThese figures are estimates from the screenshot, not verified official fee quotations. Check the current fee details here: ${COLLEGE.fees}\nFor confirmation, call ${COLLEGE.phone}.`,
    admission: `ADMISSIONS — A.S. COLLEGE, KHANNA\n\nThe admissions page lists BCA, B.Com, B.Sc. and B.A. at undergraduate level, and M.Com, M.Sc. Mathematics, M.Sc. Chemistry and M.A. programmes at postgraduate level. Availability and deadlines may vary by session.\n\nBCA contact: Dr. Vivek Bhambri — 9855534289\nB.Com / M.Com contact: Dr. Mohit Kumar — 8146000416\nB.Sc. contacts: Dr. Charn Kumar — 7889157051; Prof. Ravinderjeet Singh — 9464275002\nB.A. contacts: Dr. Manu Verma — 9815822658; Dr. Gagandeep Sethi — 8146000947\n\nOfficial admissions page: ${COLLEGE.admissions}\nPunjab admission portal: ${COLLEGE.admissionPortal}\nAdmission rules: ${COLLEGE.admissionRules}\nCollege office: ${COLLEGE.phone}`,
    eligibility: `COLLEGE ADMISSION ELIGIBILITY\n\nThe information in the screenshot you provided says students should have passed Class 12 from a recognized board. Admission is subject to the minimum academic qualifications and other requirements for the selected course. Course-specific eligibility can differ, so please confirm it before applying.\n\nDocuments mentioned in your screenshot: Class 10 and Class 12 marksheets, transfer certificate and other relevant documents. The official admission rules may list additional documents: ${COLLEGE.admissionRules}\nOfficial admissions page: ${COLLEGE.admissions}\nCollege office: ${COLLEGE.phone}`,
    hostel: `HOSTEL FACILITIES\n\nThe text in the screenshot you provided says the college is unable to provide hostel facilities. As this may not be a current official notice, please confirm the present position directly with the college before making accommodation plans.\n\nCollege office: ${COLLEGE.phone}\nWebsite: ${COLLEGE.website}`,
    scholarship: `SCHOLARSHIPS AND FINANCIAL AID\n\nSchemes visible in your screenshots include:\n• Post-Matric Scholarship for SC students\n• Post-Matric Scholarship for OBC students\n• Central Sector Scholarship for College students\n• Central Sector Scholarship for Minority students\n• Scholarship for students with disabilities\n• Central Sector Scholarship for PG students\n• Single Girl Child Scholarship\n• Student Aid Fund\n• Red Cross\n• M/s Disha Education Welfare Trust\n• M/s Brij Lal Gupta Kanta Devi Charitable Trust\n• M/s Sangeeta Dutt Memorial Forum\n• Sarbat da Bhala Charitable Trust\n• A.S. College Alumni Association Scholarship\n• Mrs. Malwinder Kaur Memorial Scholarship\n• Dr. Tarun Garg Memorial Scholarship\n• Scholarship sponsored by Principal Agya Johar\n• Vinita Bhardwaj Memorial Scholarship for one B.Sc. student\n• A.S. College Ex-Students Association Toronto, Canada\n• Sports stipends and other memorial scholarships\n• Alumni Research Grant\n• Scholarship by Sh. Suriender Singh, Bangalore (for Rahoun village students)\n\nEligibility, funding and deadlines vary. See the college's financial-aid policy: ${COLLEGE.scholarships}\nCollege office: ${COLLEGE.phone}`,
    department: `DEPARTMENTS SHOWN IN YOUR SCREENSHOT\n\nSCIENCE\n• Physics\n• Chemistry\n• Mathematics\n• Biology\n• Computer Science and Applications\n\nHUMANITIES\n• History\n• Economics\n• Music\n• Physical Education\n• Political Science\n• Public Administration\n\nLANGUAGES\n• English\n• Hindi\n• Punjabi\n\nCOMMERCE\n• Commerce\n\nFor department-specific details, visit the college website: ${COLLEGE.website}\nCollege office: ${COLLEGE.phone}`,
    library: `COLLEGE LIBRARY\n\nThe library information in your screenshot describes more than 50,000 books, 30 journals, 20 magazines and 12 daily newspapers, with SOUL 2.0 library software.\n\nThe college's library information page lists timings of Monday to Saturday, 8:45 a.m. to 4:00 p.m. Timings and services may change during holidays or exams.\n\nOfficial library rules/details: ${COLLEGE.library}\nCollege website: ${COLLEGE.website}`,
    contact: `CONTACT A.S. COLLEGE, KHANNA\n\nAddress: ${COLLEGE.address}\nPhone: ${COLLEGE.phone}\nEmail: ${COLLEGE.email}\nWebsite: ${COLLEGE.website}\nAdmissions: ${COLLEGE.admissions}\nFee details: ${COLLEGE.fees}`,
    greeting: "Hello! 👋 Welcome to AS College Assistant. You can ask about courses, BCA, fees, admissions, eligibility, scholarships, hostel, departments, library or contact details.",
    help: `You can ask about:\n• Courses available\n• BCA course or BCA fees\n• Admission and admission contacts\n• Eligibility and required documents\n• Hostel facilities\n• Scholarships and financial aid\n• Departments\n• Library facilities and timings\n• College contact details\n\nUse the quick-enquiry buttons below, or type your question.`
};

const chat = document.getElementById("chatMessages");
const input = document.getElementById("userInput");
const form = document.getElementById("chatForm");
const clearButton = document.getElementById("clearChatBtn");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        sendMessage();
    });
}

document.addEventListener("click", function (event) {
    const button = event.target.closest("[data-question]");
    if (!button || !input) return;
    input.value = button.dataset.question || button.textContent.trim();
    sendMessage();
});

if (clearButton) clearButton.addEventListener("click", clearChat);

function sendMessage() {
    if (!chat || !input) {
        console.error("Chatbot setup error: chatMessages or userInput element is missing.");
        return;
    }
    const message = input.value.trim();
    if (!message) {
        input.focus();
        return;
    }
    addMessage(message, "user");
    input.value = "";
    input.focus();
    const reply = getBotResponse(message);
    window.setTimeout(function () { addMessage(reply, "bot"); }, 180);
}

function getBotResponse(message) {
    const text = message.toLowerCase().trim();
    const words = text.replace(/[^a-z0-9.+\s-]/g, " ").split(/\s+/).filter(Boolean);

    // Specific intents first so "BCA fees" returns the BCA fee response.
    if (/\b(bca|b\.c\.a\.?|bachelor of computer applications)\b/.test(text) && /\b(fee|fees|cost|price|charges|tuition|payment|amount|how much)\b/.test(text)) return answers.bcaFees;
    if (/\b(fee|fees|cost|price|charges|tuition|payment|how much|amount)\b/.test(text)) return answers.fees;
    if (/\b(admission|admissions|apply|application|prospectus|enrol|enroll|last date|deadline|how to join)\b/.test(text)) return answers.admission;
    if (/\b(eligibility|eligible|qualification|qualifications|marks|percentage|12th|class 12|requirements|documents)\b/.test(text)) return answers.eligibility;
    if (/\b(scholarship|scholarships|financial aid|stipend|grant)\b/.test(text)) return answers.scholarship;
    if (/\b(hostel|accommodation|room|residence)\b/.test(text)) return answers.hostel;
    if (/\b(department|departments|faculty|subject department)\b/.test(text)) return answers.department;
    if (/\b(library|books|journals|reading room|library timing|library timings)\b/.test(text)) return answers.library;
    if (/\b(contact|phone|telephone|email|address|location|office|principal|number)\b/.test(text)) return answers.contact;
    if (/\b(bca|b\.c\.a\.?|bachelor of computer applications)\b/.test(text)) return answers.bca;
    if (/\b(bcom|b\.com|bsc|b\.sc|b\.a|mcom|m\.com|msc|m\.sc|m\.a|pgdca|b\.voc|bachelor)\b/.test(text)) return answers.courses;
    if (/\b(course|courses|programme|programmes|program|programs|degree|what can i study)\b/.test(text)) return answers.courses;
    if (/^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(text)) return answers.greeting;
    if (/\b(help|what can you do|options)\b/.test(text)) return answers.help;
    return "I couldn't match that question yet.\n\n" + answers.help;
}

function addMessage(message, sender) {
    const row = document.createElement("div");
    row.className = sender === "user" ? "message user-message" : "message bot-message";
    if (sender === "bot") {
        const avatar = document.createElement("div");
        avatar.className = "message-avatar";
        avatar.textContent = "🤖";
        avatar.setAttribute("aria-hidden", "true");
        row.appendChild(avatar);
    }
    const content = document.createElement("div");
    const bubble = document.createElement("div");
    bubble.className = "message-bubble";
    if (sender === "bot") appendBotMessageWithLinks(bubble, message);
    else bubble.textContent = message;
    const time = document.createElement("small");
    time.className = "message-time";
    time.textContent = getTime();
    content.appendChild(bubble);
    content.appendChild(time);
    row.appendChild(content);
    chat.appendChild(row);
    chat.scrollTop = chat.scrollHeight;
}

// Render HTTPS URLs as safe clickable links and preserve newlines in text.
function appendBotMessageWithLinks(container, message) {
    const urlPattern = /https:\/\/[^\s]+/g;
    let lastIndex = 0;
    let match;
    while ((match = urlPattern.exec(message)) !== null) {
        let urlText = match[0];
        let trailing = "";
        while (/[.,!?;:)\]]$/.test(urlText)) {
            trailing = urlText.slice(-1) + trailing;
            urlText = urlText.slice(0, -1);
        }
        appendTextWithBreaks(container, message.slice(lastIndex, match.index));
        try {
            const parsedUrl = new URL(urlText);
            if (parsedUrl.protocol !== "https:") throw new Error("Only HTTPS links are allowed");
            const link = document.createElement("a");
            link.href = parsedUrl.href;
            link.textContent = urlText;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.className = "chat-link";
            container.appendChild(link);
        } catch (error) {
            appendTextWithBreaks(container, urlText);
        }
        appendTextWithBreaks(container, trailing);
        lastIndex = match.index + match[0].length;
    }
    appendTextWithBreaks(container, message.slice(lastIndex));
}

function appendTextWithBreaks(container, text) {
    const parts = text.split("\n");
    parts.forEach((part, index) => {
        if (index > 0) container.appendChild(document.createElement("br"));
        container.appendChild(document.createTextNode(part));
    });
}

function clearChat() {
    if (!chat) return;
    chat.replaceChildren();
    addMessage(answers.greeting, "bot");
    if (input) input.focus();
}

function getTime() {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
