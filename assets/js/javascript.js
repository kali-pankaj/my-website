// Header
document.addEventListener("DOMContentLoaded", () => {

    const headerHTML = `
    <header class="navbar">

        <div class="logo">
            <img src="/assets/images/profile.jpg" alt="logo" class="logo-img">
            <h3>DevOps Learning Journey</h3>
        </div>

        <nav>
            <ul class="nav-links">
                <li><a href="/index.html">Home</a></li>
                <li><a href="pages/devopsForm/form.html">Enrollment</a></li>
                <li><a href="#">About</a></li>
                <li><a href="pages/resume/form_resume.html">Resume-Template</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="/pages/login/login.html">Sign In</a></li>
            </ul>
        </nav>

    </header>
    `;

    document.getElementById("headerContainer").innerHTML = headerHTML;

});

//  jobe title
const jobTitles = [
    "DevOps Engineer",
    "Site Reliability Engineer",
    "Infrastructure Engineer",
    "Automation Engineer",
    "Build & Release Engineer",
    "Platform Engineer",
    "Configuration Management Engineer",
    "CI/CD Engineer",
    "Operations Engineer",
    "Cloud Engineer",
    "Cloud System Administrator",
    "Systems Administrator",
    "System Engineer",
    "Architect & Requirements Engineer",
    "Software Engineer",
    "Web Infrastructure Architect"
];

const container = document.getElementById("jobsContainer");

jobTitles.forEach(title => {
    const div = document.createElement("div");
    div.classList.add("job-card");
    div.textContent = title;

    container.appendChild(div);
});

// Road map
document.addEventListener("DOMContentLoaded", () => {

    const roadmapData = [
        {
            title: "Core Technologies",
            items: [
                { name: "Linux", link: "pages/linux/linux.html" },
                { name: "Git", link: "pages/git/git.html" },
                { name: "AWS", link: "pages/aws/aws.html" },
                { name: "Networking", link: "pages/networking/networking.html" }
            ]
        },
        {
            title: "Automation & Scripting",
            items: [
                { name: "Bash / Shell", link: "pages/shell/shell.html" },
                { name: "Python", link: "pages/python/python.html" }
            ]
        },
        {
            title: "Containers & Orchestration",
            items: [
                { name: "Docker", link: "pages/docker/docker.html" },
                { name: "Kubernetes", link: "pages/kubernetes/kubernetes.html" },
                { name: "Helm", link: "pages/helm/helm.html" },
                { name: "Argo CD", link: "pages/argocd/argocd.html" }
            ]
        },
        {
            title: "Infrastructure as Code",
            items: [
                { name: "Ansible", link: "pages/ansible/ansible.html" },
                { name: "Terraform", link: "pages/terraform/terraform.html" }
            ]
        },
        {
            title: "CI/CD Pipelines",
            items: [
                { name: "Jenkins", link: "pages/jenkins/jenkins.html" },
                { name: "GitHub Actions", link: "pages/github-actions/github-actions.html" },
                { name: "GitLab", link: "pages/gitlab/gitlab.html" }
            ]
        },
        {
            title: "Monitoring & Observability",
            items: [
                { name: "Prometheus", link: "pages/prometheus/prometheus.html" },
                { name: "Grafana", link: "pages/grafana/grafana.html" },
                { name: "Datadog", link: "pages/datadog/datadog.html" },
                { name: "ELK Stack", link: "pages/elk/elk.html" }
            ]
        },
        {
            title: "Messaging / Streaming",
            items: [
                { name: "Kafka", link: "pages/kafka/kafka.html" },
                { name: "Confluent", link: "pages/confluent/confluent.html" },
                { name: "AWS MSK", link: "pages/aws-msk/aws-msk.html" }
            ]
        },
        {
            title: "Site Reliability Engineering",
            items: [
                { name: "Monitoring – Prometheus, Grafana, Datadog, New Relic", link: "#" },
                { name: "Logging – ELK Stack, Fluentd, Loki", link: "#" },
                { name: "Automation – Terraform, Ansible, Chef, Puppet", link: "#" },
                { name: "CI/CD – Jenkins, GitLab CI, ArgoCD", link: "#" },
                { name: "Incident Response Tools – PagerDuty, Opsgenie, Slack integrations", link: "#" }
            ]
        },
        {
            title: "Security (DevSecOps) – Beginner",
            items: [
                { name: "SAST – SonarQube, Semgrep", link: "pages/sonarqube/sonarqube.html" },
                { name: "SCA – Snyk, Trivy", link: "pages/trivy/trivy.html" },
                { name: "DAST – OWASP ZAP", link: "pages/owaspzap/zap.html" },
                { name: "Secrets Detection – Gitleaks, TruffleHog", link: "pages/gitleaks/gitleaks.html" },
                { name: "Basic Container Security – Docker Bench", link: "pages/kube-bench/kube-bench.html" },
                { name: "CI/CD Security – GitLab/Jenkins basic scanners", link: "pages/cicd/cicd.html" }
            ]
        },
        {
            title: "Security (DevSecOps) – Advanced",
            items: [
                { name: "Container Security – Clair, Anchore", link: "pages/kube-bench/kube-bench.html" },
                { name: "IaC Security – Checkov, Terrascan", link: "pages/checkov/checkov.html" },
                { name: "Secrets Management – Vault", link: "pages/vault/vault.html" },
                { name: "Runtime Protection – Falco, AppArmor", link: "pages/vault/vault.html" },
                { name: "Logging & Monitoring – ELK Stack, Wazuh", link: "pages/logging/logging.html" },
                { name: "Vulnerability Management – DefectDojo", link: "pages/defectdojo/defectdojo.html" },
                { name: "Advanced CI/CD Security – Integrated pipelines & policy enforcement", link: "pages/cicd/cicd.html" }
            ]
        }
    ];

    const container = document.getElementById("roadmapContainer");

    roadmapData.forEach(section => {
        const box = document.createElement("div");
        box.classList.add("roadmap-box");

        const title = document.createElement("h3");
        title.textContent = section.title;

        const ul = document.createElement("ul");

        section.items.forEach(item => {
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.href = item.link;
            a.textContent = item.name;

            li.appendChild(a);
            ul.appendChild(li);
        });

        box.appendChild(title);
        box.appendChild(ul);

        container.appendChild(box);
    });
});

//  <!-- Tools -->
document.addEventListener("DOMContentLoaded", () => {

    const toolsData = [
        { name: "Linux", link: "/pages/linux/linux.html", img: "/pages/linux/Linux.jpg" },
        { name: "Networking", link: "/pages/networking/networking.html", img: "/pages/networking/networking.jpg" },
        { name: "Scripting", link: "/pages/shell/shell.html", img: "/pages/shell/shel.jpg" },
        { name: "Ansible", link: "/pages/ansible/ansible.html", img: "/pages/ansible/ansible.jpg" },
        { name: "Terraform", link: "/pages/terraform/terraform.html", img: "/pages/terraform/terraform.jpg" },
        { name: "Docker", link: "/pages/docker/docker.html", img: "/pages/docker/docker.jpg" },
        { name: "GitHub", link: "/pages/git/git.html", img: "/pages/git/github.jpg" },
        { name: "Jenkins", link: "/pages/jenkins/jenkins.html", img: "/pages/jenkins/jenkins.jpg" },
        { name: "Kubernetes", link: "/pages/kubernetes/kubernetes.html", img: "/pages/kubernetes/k8s.jpg" },
        { name: "AWS", link: "/pages/aws/aws.html", img: "/pages/aws/aws.jpg" },
        { name: "Grafana", link: "/pages/grafana/grafana.html", img: "/pages/grafana/grafana.jpg" },
        { name: "Helm", link: "/pages/helm/helm.html", img: "/pages/helm/helm.jpg" },
        { name: "Argo CD", link: "/pages/argo-cd/argo.html", img: "/pages/argocd/argo.jpg" },
        { name: "Python", link: "/pages/python/python.html", img: "/pages/python/python.jpg" },
        { name: "DataDog", link: "/pages/data-dog/data-dog.html", img: "/pages/datadog/data_dog.jpg" }
        
    ];

    const container = document.getElementById("toolsContainer");

    toolsData.forEach(tool => {
        const box = document.createElement("div");
        box.classList.add("box");

        const a = document.createElement("a");
        a.href = tool.link;

        const img = document.createElement("img");
        img.src = tool.img;
        img.alt = tool.name;

        const p = document.createElement("p");
        p.textContent = tool.name;

        a.appendChild(img);
        a.appendChild(p);
        box.appendChild(a);

        container.appendChild(box);
    });

});

// <!--Footer-->
document.addEventListener("DOMContentLoaded", () => {

    const footerHTML = `
    <footer class="footer">
        <div class="footer-content">
            <h2>🚀 Start Your DevOps Journey</h2>
            <p>
                Learn DevOps tools in depth and build real-world skills.
                Stay consistent, practice daily, break systems and fix them —
                that’s how real DevOps Engineers grow.
            </p>
        </div>
    </footer>
    `;

    document.getElementById("footerContainer").innerHTML = footerHTML;

});
