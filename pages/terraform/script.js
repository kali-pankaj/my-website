// DETAILED CONTENT DATA
const detailedContent = [
    // INtroduction block
    {
  id: "intro",
  title: "🎯 Introduction to Terraform - Explained Simply",
  content: [
    `<h4 style="color: #1e40af; margin: 2rem 0 1rem 0; font-size: 1.4rem;">1️⃣ What is Infrastructure as Code (IaC)?</h4>
    <p><strong>Terraform = Infrastructure as Code (IaC)</strong> means:</p>
    <ul style="margin: 1.5rem 0; padding-left: 2rem; color: #475569; font-size: 1.1rem;">
      <li><strong>❌ Old Way:</strong> Click buttons in AWS Console → Manual → Error-prone → Can't repeat</li>
      <li><strong>✅ Terraform Way:</strong> Write text file → Run 1 command → Perfect infrastructure → Repeat anytime</li>
    </ul>
    <p style="background: #f0f9ff; padding: 1.5rem; border-radius: 12px; border-left: 5px solid #0ea5e9; margin: 1.5rem 0;">
      <strong>Real Example:</strong> Instead of clicking 20 times to create a web server, 
      you write 10 lines of code and run <code>terraform apply</code>. Done in 30 seconds!
    </p>`,

    `<h4 style="color: #1e40af; margin: 2rem 0 1rem 0; font-size: 1.4rem;">2️⃣ HashiCorp's Masterpiece</h4>
    <p><strong>Created by HashiCorp</strong> - the same company behind Vault, Consul, Nomad:</p>
    <ul style="margin: 1.5rem 0; padding-left: 2rem; color: #475569; font-size: 1.1rem;">
      <li>🏢 Used by <strong>Netflix, Spotify, Airbnb, NASA</strong></li>
      <li>⭐ <strong>35,000+ GitHub stars</strong></li>
      <li>📈 <strong>Millions of downloads monthly</strong></li>
    </ul>`,

    `<h4 style="color: #1e40af; margin: 2rem 0 1rem 0; font-size: 1.4rem;">3️⃣ CLI Workflow = Simple & Powerful</h4>
    <p><strong>Consistent CLI</strong> means same commands everywhere:</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
      <div style="background: #ecfdf5; padding: 1.5rem; border-radius: 12px; text-align: center;">
        <code style="display: block; font-size: 1.3rem; color: #059669; margin-bottom: 0.5rem;">terraform init</code>
        <small style="color: #6b7280;">Setup (10s)</small>
      </div>
      <div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; text-align: center;">
        <code style="display: block; font-size: 1.3rem; color: #d97706; margin-bottom: 0.5rem;">terraform plan</code>
        <small style="color: #6b7280;">Preview (20s)</small>
      </div>
      <div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; text-align: center;">
        <code style="display: block; font-size: 1.3rem; color: #1d4ed8; margin-bottom: 0.5rem;">terraform apply</code>
        <small style="color: #6b7280;">Deploy (1min)</small>
      </div>
    </div>`,

    `<h4 style="color: #1e40af; margin: 2rem 0 1rem 0; font-size: 1.4rem;">4️⃣ HCL - Human Configuration Language</h4>
    <p style="font-size: 1.1rem; color: #475569;">
      <strong>HCL = HashiCorp Configuration Language</strong> - Designed to be:
    </p>
    <ul style="margin: 1.5rem 0; padding-left: 2rem; color: #475569;">
      <li>📖 <strong>Human-readable</strong> (like JSON but better)</li>
      <li>✅ <strong>Easy to learn</strong> (5 minutes)</li>
      <li>🔄 <strong>Version control friendly</strong> (Git works perfectly)</li>
    </ul>
    <div style="background: #f8fafc; padding: 2rem; border-radius: 12px; border-left: 5px solid #64748b; margin: 1.5rem 0;">
      <pre style="font-size: 14px; color: #475569; margin: 0; white-space: pre-wrap;"><code>provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami = "ami-123456"
}</code></pre>
    </div>`,

    `<h4 style="color: #1e40af; margin: 2rem 0 1rem 0; font-size: 1.4rem;">5️⃣ Single Binary = Zero Hassle</h4>
    <p style="font-size: 1.1rem; color: #475569;">
      <strong>No installation nightmare!</strong> Just:
    </p>
    <ol style="margin: 1.5rem 0; padding-left: 2rem; color: #475569;">
      <li>📥 Download 50MB file (Windows/Mac/Linux)</li>
      <li>✨ Put in folder</li>
      <li>✅ Run <code>terraform version</code></li>
    </ol>
    <blockquote style="background: #f8fafc; border-left: 5px solid #94a3b8; padding: 2rem; margin: 2rem 0; font-style: italic;">
      "Terraform is the only tool where setup takes 2 minutes and 
      you never think about installation again."
    </blockquote>`
  ],
  features: [
    "🎯 <strong>Declarative:</strong> Describe WHAT, not HOW",
    "☁️ <strong>Multi-provider:</strong> AWS + Azure + GCP + 1000+ others",
    "💾 <strong>State management:</strong> Tracks exactly what you deployed",
    "🔍 <strong>Drift detection:</strong> Alerts if someone manually changes your infra"
  ]
},

// Installation block
{
  id: "install",
  title: "💻 Installation - 5 Minutes Max! (All OS)",
  content: [
    `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 2rem 0;">
      <div style="background: #ecfdf5; padding: 2rem; border-radius: 16px; border-left: 6px solid #10b981; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🟢</div>
        <h4 style="color: #065f46; margin-bottom: 1rem;">Linux</h4>
        <strong>Ubuntu/Debian/CentOS</strong>
        <p style="color: #6b7280; margin-top: 1rem;">Most popular method</p>
      </div>
      <div style="background: #fef3c7; padding: 2rem; border-radius: 16px; border-left: 6px solid #d97706; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🟡</div>
        <h4 style="color: #92400e; margin-bottom: 1rem;">macOS</h4>
        <strong>Homebrew</strong>
        <p style="color: #6b7280; margin-top: 1rem;">Apple users favorite</p>
      </div>
      <div style="background: #dbeafe; padding: 2rem; border-radius: 16px; border-left: 6px solid #2563eb; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔵</div>
        <h4 style="color: #1e40af; margin-bottom: 1rem;">Windows</h4>
        <strong>Chocolatey/Direct</strong>
        <p style="color: #6b7280; margin-top: 1rem;">Windows PowerShell</p>
      </div>
    </div>`,

    `<h4 style="color: #1e40af; margin: 3rem 0 2rem 0; font-size: 1.5rem;">🎯 Method 1: Package Managers (RECOMMENDED)</h4>
    <p style="color: #475569; font-size: 1.1rem;">
      Safest & easiest - automatic updates included:
    </p>`,

    `<h4 style="color: #059669; margin: 2.5rem 0 1.5rem 0; font-size: 1.4rem;">🐧 Linux (Ubuntu/Debian)</h4>
    <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #10b981; margin: 1rem 0;">
      <p style="margin: 0 0 1rem 0; color: #166534;"><strong>Copy & paste these 4 lines:</strong></p>
      <code style="display: block; background: #166534; color: white; padding: 1rem; border-radius: 8px; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
sudo apt-get update && sudo apt-get install terraform
terraform --version
      </code>
    </div>`,

    `<h4 style="color: #d97706; margin: 2.5rem 0 1.5rem 0; font-size: 1.4rem;">🍎 macOS (Homebrew)</h4>
    <div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #f59e0b; margin: 1rem 0;">
      <p style="margin: 0 0 1rem 0; color: #92400e;"><strong>If you have Homebrew (most do):</strong></p>
      <code style="display: block; background: #92400e; color: white; padding: 1rem; border-radius: 8px; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
terraform --version
      </code>
    </div>`,

    `<h4 style="color: #1d4ed8; margin: 2.5rem 0 1.5rem 0; font-size: 1.4rem;">🪟 Windows (Chocolatey)</h4>
    <div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #3b82f6; margin: 1rem 0;">
      <p style="margin: 0 0 1rem 0; color: #1e40af;"><strong>PowerShell as Administrator:</strong></p>
      <code style="display: block; background: #1e40af; color: white; padding: 1rem; border-radius: 8px; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">
choco install terraform
terraform --version
      </code>
    </div>`,

    `<h4 style="color: #7c3aed; margin: 3rem 0 1.5rem 0; font-size: 1.4rem;">⚡ Manual Download (Any OS)</h4>
    <p style="color: #475569;">
      Go to <a href="https://developer.hashicorp.com/terraform/downloads" target="_blank" style="color: #7c3aed; font-weight: 600;">HashiCorp Downloads</a>:
    </p>
    <ol style="margin: 1.5rem 0; padding-left: 2rem; color: #475569; font-size: 1.1rem;">
      <li>Click your OS (zip file ~50MB)</li>
      <li>Extract <code>terraform</code> file</li>
      <li>Move to <code>/usr/local/bin/</code> (Linux/Mac) or <code>C:\\terraform\\</code> (Windows)</li>
      <li><code style="background: #f3f4f6; padding: 4px 8px; border-radius: 6px;">terraform version</code></li>
    </ol>`,

    `<div style="background: linear-gradient(135deg, #f8fafc, #f1f5f9); padding: 3rem; border-radius: 20px; text-align: center; margin: 3rem 0;">
      <h3 style="color: #1e293b; margin-bottom: 1rem; font-size: 1.8rem;">✅ Success Check</h3>
      <div style="background: #1e293b; color: white; padding: 2rem 3rem; border-radius: 12px; display: inline-block; font-family: monospace; font-size: 1.2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
        <strong>Terraform v1.6.6</strong><br>
        <small style="opacity: 0.8;">on linux_amd64
      </div>
      <p style="color: #6b7280; margin-top: 1.5rem; font-size: 1.1rem;">
        You see this? You're ready! 🎉
      </p>
    </div>`
  ],
  code: `#!/bin/bash
# 🔥 COMPLETE INSTALL SCRIPT (Linux/Mac)

echo "🚀 Installing Terraform..."

# Ubuntu/Debian
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
sudo apt-get update && sudo apt-get install terraform

# macOS Homebrew (uncomment if macOS)
# brew tap hashicorp/tap
# brew install hashicorp/tap/terraform

echo "✅ Done! Check version:"
terraform --version

echo "🎉 Ready to terraform the world!"`
},

//  Provider block
{
  id: "providers",
  title: "🔌 Providers - Your Cloud Connection (Explained)",
  content: [
    `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin: 2rem 0;">
      <div style="background: #fef3c7; padding: 2.5rem; border-radius: 20px; border-left: 6px solid #f59e0b;">
        <h4 style="color: #d97706; margin-bottom: 1.5rem;">🤔 What are Providers?</h4>
        <p style="color: #92400e; font-size: 1.1rem; line-height: 1.7;">
          <strong>Providers = Adapters/Plugins</strong> that connect Terraform to cloud APIs:
        </p>
        <ul style="margin: 1.5rem 0; padding-left: 2rem; color: #92400e;">
          <li>🔌 <strong>AWS Provider</strong> → Talks to AWS API</li>
          <li>☁️ <strong>Azure Provider</strong> → Talks to Azure API</li>
          <li>🐧 <strong>Kubernetes Provider</strong> → Talks to K8s API</li>
          <li>📱 <strong>1000+ others</strong> (GitHub, Slack, DNS...)</li>
        </ul>
      </div>
      <div style="background: #dbeafe; padding: 2.5rem; border-radius: 20px; border-left: 6px solid #3b82f6;">
        <h4 style="color: #1d4ed8; margin-bottom: 1.5rem;">⚙️ What do they configure?</h4>
        <ul style="margin: 1.5rem 0; padding-left: 2rem; color: #1e40af; font-size: 1.1rem;">
          <li>🌍 <strong>Region:</strong> us-east-1, eu-west-1</li>
          <li>🔑 <strong>Authentication:</strong> API keys, IAM roles</li>
          <li>📡 <strong>Endpoints:</strong> Custom API URLs</li>
          <li>🏷️ <strong>Tags:</strong> Auto-label everything</li>
        </ul>
      </div>
    </div>`,

    `<h4 style="color: #1e40af; margin: 3rem 0 2rem 0; font-size: 1.5rem;">🎯 Step 1: Required Providers Block</h4>
    <p style="color: #475569; font-size: 1.1rem;">
      <strong>Tells Terraform which plugins to download:</strong>
    </p>
    <div style="background: #f8fafc; padding: 2rem; border-radius: 16px; border-left: 5px solid #64748b; margin: 1.5rem 0;">
      <p style="margin: 0 0 1rem 0; color: #475569; font-weight: 600;">
        <code style="background: #e2e8f0; padding: 4px 8px; border-radius: 6px; font-size: 0.9rem;">~> 5.40</code> 
        means "5.40 or higher, but <5.50" (safe updates)
      </p>
    </div>`,

    `<h4 style="color: #059669; margin: 3rem 0 2rem 0; font-size: 1.5rem;">🎯 Step 2: Provider Configuration</h4>
    <p style="color: #475569;">
      <strong>Settings for each provider:</strong>
    </p>`,

    `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin: 2.5rem 0;">
      <div style="background: #ecfdf5; padding: 2rem; border-radius: 16px;">
        <h5 style="color: #065f46; margin-bottom: 1rem;">✅ Basic AWS</h5>
        <pre style="font-size: 13px; color: #166534; margin: 0; white-space: pre-wrap; background: transparent;"><code>provider "aws" {
  region = "us-east-1"
}</code></pre>
      </div>
      <div style="background: #dbeafe; padding: 2rem; border-radius: 16px;">
        <h5 style="color: #1e40af; margin-bottom: 1rem;">🔐 With Variables</h5>
        <pre style="font-size: 13px; color: #1e40af; margin: 0; white-space: pre-wrap; background: transparent;"><code>provider "aws" {
  region = var.aws_region
}</code></pre>
      </div>
      <div style="background: #fef3c7; padding: 2rem; border-radius: 16px;">
        <h5 style="color: #d97706; margin-bottom: 1rem;">🏷️ Auto Tags</h5>
        <pre style="font-size: 13px; color: #92400e; margin: 0; white-space: pre-wrap; background: transparent;"><code>default_tags {
  tags = {
    Environment = "prod"
  }
}</code></pre>
      </div>
    </div>`,

    `<h4 style="color: #7c3aed; margin: 3rem 0 2rem 0; font-size: 1.5rem;">🌟 Version Pinning = Production Ready</h4>
    <p style="color: #475569; font-size: 1.1rem;">
      <strong>Why versions matter:</strong>
    </p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
      <div style="background: #fecaca; padding: 1.5rem; border-radius: 12px; text-align: center;">
        <strong style="color: #dc2626; font-size: 1.3rem;">❌ No Version</strong><br>
        <small>Breaks randomly</small>
      </div>
      <div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; text-align: center;">
        <strong style="color: #2563eb; font-size: 1.3rem;">✅ ~> 5.40</strong><br>
        <small>Safe updates</small>
      </div>
      <div style="background: #ecfdf5; padding: 1.5rem; border-radius: 12px; text-align: center;">
        <strong style="color: #059669; font-size: 1.3rem;">🎯 = 5.40.0</strong><br>
        <small>Exact version</small>
      </div>
    </div>`,

    `<div style="background: linear-gradient(135deg, #f8fafc, #f1f5f9); padding: 3rem 2.5rem; border-radius: 24px; text-align: center; margin: 4rem 0 2rem 0; border: 2px dashed #cbd5e1;">
      <h3 style="color: #1e293b; margin-bottom: 1.5rem;">🚀 Ready to Connect?</h3>
      <p style="color: #64748b; font-size: 1.2rem; margin-bottom: 2rem;">
        Copy the code below → Save as <code>providers.tf</code> → Run <code>terraform init</code>
      </p>
    </div>`
  ],
  code: `terraform {
  # Terraform version requirement
  required_version = ">= 1.5.0"
  
  # Download these exact providers
  required_providers {
    aws = {
      source  = "hashicorp/aws"      # Official AWS provider
      version = "~> 5.40"           # Stable version range
    }
    random = {
      source  = "hashicorp/random"  # Generate random values
      version = "~> 3.5"
    }
    http = {
      source  = "hashicorp/http"    # HTTP requests
      version = "~> 3.4"
    }
  }
}

# AWS Provider - Main cloud
provider "aws" {
  region = "us-east-1"              # Your region
  
  # Auto-tag EVERY resource you create
  default_tags {
    tags = {
      Environment = "production"
      Owner       = "devops-team"
      ManagedBy   = "Terraform"
      Project     = "web-app"
    }
  }
}

# Multiple regions example
provider "aws" {
  alias  = "west"
  region = "us-west-2"
}`
},

//  Resource Block
 {
  id: "resources",
  title: "🏗️ Resources & Data Sources - Building Blocks Explained",
  content: [
    `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin: 2rem 0;">
      <div style="background: #ecfdf5; padding: 2.5rem; border-radius: 20px; border-left: 6px solid #10b981; text-align: center;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">🧱</div>
        <h4 style="color: #065f46; margin-bottom: 1rem; font-size: 1.4rem;">Resources</h4>
        <p style="color: #166534; font-size: 1.1rem;">
          <strong>Create & Manage</strong> your infrastructure
        </p>
        <ul style="text-align: left; margin-top: 1.5rem; color: #166534;">
          <li>➕ <strong>Create:</strong> New servers, databases</li>
          <li>🔄 <strong>Update:</strong> Change sizes/configs</li>
          <li>🗑️ <strong>Delete:</strong> When you say so</li>
        </ul>
      </div>
      <div style="background: #dbeafe; padding: 2.5rem; border-radius: 20px; border-left: 6px solid #3b82f6; text-align: center;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">🔍</div>
        <h4 style="color: #1d4ed8; margin-bottom: 1rem; font-size: 1.4rem;">Data Sources</h4>
        <p style="color: #1e40af; font-size: 1.1rem;">
          <strong>Read Only</strong> - Look at existing stuff
        </p>
        <ul style="text-align: left; margin-top: 1.5rem; color: #1e40af;">
          <li>👀 <strong>Read:</strong> Existing AMIs, VPCs</li>
          <li>📊 <strong>Query:</strong> Latest images, IPs</li>
          <li>🚫 <strong>Never changes:</strong> Safe to use anywhere</li>
        </ul>
      </div>
    </div>`,

    `<h4 style="color: #1e40af; margin: 3rem 0 2rem 0; font-size: 1.6rem;">🎯 Resource Syntax = Simple Formula</h4>
    <p style="color: #475569; font-size: 1.1rem; margin-bottom: 2rem;">
      <strong>Formula:</strong> <code>resource "TYPE" "NAME" { SETTINGS }</code>
    </p>
    <div style="background: #f8fafc; padding: 2.5rem; border-radius: 20px; border-left: 5px solid #3b82f6; margin: 2rem 0;">
      <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 2rem; align-items: start;">
        <div>
          <h5 style="color: #1d4ed8; margin-bottom: 1rem;">📦 TYPE (What to create)</h5>
          <ul style="color: #475569;">
            <li><code>aws_instance</code> → Servers</li>
            <li><code>aws_vpc</code> → Networks</li>
            <li><code>aws_s3_bucket</code> → Storage</li>
          </ul>
        </div>
        <div style="text-align: center; color: #64748b; font-size: 2rem; font-weight: 300;">→</div>
        <div>
          <h5 style="color: #1d4ed8; margin-bottom: 1rem;">🏷️ NAME (Your label)</h5>
          <ul style="color: #475569;">
            <li><code>"web"</code> → Friendly name</li>
            <li><code>"main"</code> → Reference later</li>
            <li>Unique in this type</li>
          </ul>
        </div>
      </div>
    </div>`,

    `<h4 style="color: #059669; margin: 3rem 0 2rem 0; font-size: 1.6rem;">🔗 Resources Talk to Each Other!</h4>
    <p style="color: #475569;">
      Use <code>.id</code> to reference other resources:
    </p>
    <div style="margin: 2rem 0;">
      <div style="background: #ecfdf5; padding: 1.5rem; border-radius: 12px; margin-bottom: 1rem;">
        <code style="color: #166534; font-size: 14px; white-space: pre-wrap;">resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}</code>
      </div>
      <div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px;">
        <code style="color: #1e40af; font-size: 14px; white-space: pre-wrap;">resource "aws_subnet" "public" {
  vpc_id = aws_vpc.main.id  ← Magic reference!
}</code>
      </div>
    </div>`,

    `<h4 style="color: #f59e0b; margin: 3rem 0 2rem 0; font-size: 1.6rem;">🔍 Data Sources = Smart Lookup</h4>
    <p style="color: #475569;">
      <strong>Never create, always read:</strong>
    </p>
    <div style="background: #fef3c7; padding: 2rem; border-radius: 16px; margin: 2rem 0;">
      <p style="color: #92400e; margin-bottom: 1rem;">
        <strong>Real example:</strong> Get latest Amazon Linux AMI automatically
      </p>
      <code style="font-size: 13px; color: #92400e; white-space: pre-wrap; background: transparent;">
data "aws_ami" "latest_amazon" {
  most_recent = true
  owners      = ["amazon"]
}</code>
    </div>
    <p style="color: #475569; font-style: italic;">
      Use <code>data.aws_ami.latest_amazon.id</code> in your resources!
    </p>`,

    `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 3rem 0;">
      <div style="background: linear-gradient(135deg, #10b98115, #05966915); padding: 2rem; border-radius: 16px; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">➕</div>
        <h5 style="color: #065f46;">Resource = CREATE</h5>
        <p style="color: #166534;">Makes new stuff exist</p>
      </div>
      <div style="background: linear-gradient(135deg, #3b82f615, #1d4ed815); padding: 2rem; border-radius: 16px; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">👁️</div>
        <h5 style="color: #1e40af;">Data Source = READ</h5>
        <p style="color: #1e40af;">Reads existing stuff</p>
      </div>
    </div>`,

    `<div style="background: #f0f9ff; padding: 3rem 2.5rem; border-radius: 24px; text-align: center; margin: 4rem 0; border-left: 6px solid #0ea5e9;">
      <h3 style="color: #0c4a6e; margin-bottom: 1.5rem;">🎁 Pro Tip: Immutable Infrastructure</h3>
      <p style="color: #0c4a6e; font-size: 1.2rem; max-width: 600px; margin: 0 auto;">
        Terraform treats infrastructure as <strong>immutable</strong> - 
        don't tweak running servers, recreate them perfectly every time!
      </p>
    </div>`
  ],
  code: `################################################################
# COMPLETE EXAMPLE: VPC + Subnet + Latest AMI
################################################################

# 1️⃣ RESOURCE: Create VPC (network)
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"        # Your private network range
  enable_dns_hostnames = true
  
  tags = {
    Name = "my-app-vpc"
  }
}

# 2️⃣ RESOURCE: Create Subnet (connects to VPC)
resource "aws_subnet" "public_a" {
  vpc_id            = aws_vpc.main.id      # ← Reference VPC!
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-east-1a"
  
  tags = {
    Name = "public-subnet-a"
  }
}

# 3️⃣ DATA SOURCE: Find latest Amazon Linux
data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]
  
  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*-x86_64-gp2"]
  }
}

# 4️⃣ RESOURCE: Launch server using latest AMI
resource "aws_instance" "web" {
  ami           = data.aws_ami.amazon_linux.id    # ← Latest AMI!
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.public_a.id          # ← Our subnet!
  
  tags = {
    Name = "web-server-01"
  }
}`
},

// Terraform WorkFlow Block 
  {
    id: "workflow",
    title: "🔄 Terraform Workflow",
    features: [
      "1️⃣ <strong>terraform init</strong> - Initialize",
      "2️⃣ <strong>terraform plan</strong> - Preview",
      "3️⃣ <strong>terraform apply</strong> - Deploy",
      "4️⃣ <strong>terraform destroy</strong> - Cleanup"
    ]
  },

//   Terraform State File 
{
  id: "state",
  title: "💾 State Management - The Secret Sauce Explained",
  content: [
    `<div style="background: linear-gradient(135deg, #f8fafc, #f1f5f9); padding: 3rem; border-radius: 24px; margin: 2rem 0; text-align: center;">
      <h3 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.8rem;">
        🤯 Why State Matters (Most Important Concept!)
      </h3>
      <p style="color: #475569; font-size: 1.3rem; max-width: 700px; margin: 0 auto 2rem auto;">
        Terraform needs to <strong>KNOW what exists</strong> to make smart decisions.
        Without state = Blindfolded architect!
      </p>
      <div style="display: inline-block; background: #1e293b; color: white; padding: 1.5rem 3rem; border-radius: 12px; font-family: monospace; font-size: 1.1rem;">
        terraform.tfstate = Your infrastructure blueprint 📐
      </div>
    </div>`,

    `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin: 3rem 0;">
      <div style="background: #fef3c7; padding: 2.5rem; border-radius: 20px; border-left: 6px solid #f59e0b;">
        <h4 style="color: #d97706; margin-bottom: 1.5rem; font-size: 1.4rem;">❌ Local State (Solo Dev)</h4>
        <ul style="color: #92400e; font-size: 1.1rem;">
          <li>📁 <code>terraform.tfstate</code> in project folder</li>
          <li>✅ Fine for learning</li>
          <li>⚠️ <strong>LOSES HISTORY</strong> if you delete file</li>
          <li>🚫 <strong>Team can't collaborate</strong></li>
        </ul>
      </div>
      <div style="background: #dbeafe; padding: 2.5rem; border-radius: 20px; border-left: 6px solid #3b82f6;">
        <h4 style="color: #1d4ed8; margin-bottom: 1.5rem; font-size: 1.4rem;">✅ Remote State (Production)</h4>
        <ul style="color: #1e40af; font-size: 1.1rem;">
          <li>☁️ Stored in S3, Azure Blob, etc.</li>
          <li>🔒 <strong>Versioned history</strong></li>
          <li>👥 <strong>Team collaboration</strong></li>
          <li>🚀 <strong>Locking prevents conflicts</strong></li>
        </ul>
      </div>
    </div>`,

    `<h4 style="color: #1e40af; margin: 3rem 0 2rem 0; font-size: 1.6rem;">🎯 How State Works (Magic Revealed)</h4>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 2.5rem 0;">
      <div style="background: #ecfdf5; padding: 2rem; border-radius: 16px; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem; color: #10b981;">1️⃣</div>
        <h5 style="color: #065f46;">terraform plan</h5>
        <p style="color: #166534;">Compares code vs state</p>
      </div>
      <div style="background: #dbeafe; padding: 2rem; border-radius: 16px; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem; color: #3b82f6;">2️⃣</div>
        <h5 style="color: #1e40af;">terraform apply</h5>
        <p style="color: #1e40af;">Creates → Updates state</p>
      </div>
      <div style="background: #fef3c7; padding: 2rem; border-radius: 16px; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem; color: #f59e0b;">3️⃣</div>
        <h5 style="color: #d97706;">Next time...</h5>
        <p style="color: #92400e;">Only changes what's different</p>
      </div>
    </div>`,

    `<h4 style="color: #059669; margin: 3rem 0 2rem 0; font-size: 1.6rem;">🔒 Production Setup: S3 + DynamoDB</h4>
    <p style="color: #475569; font-size: 1.1rem; margin-bottom: 2rem;">
      <strong>AWS Gold Standard:</strong> S3 (storage) + DynamoDB (locks)
    </p>
    <div style="background: #f0f9ff; padding: 2rem; border-radius: 16px; border-left: 5px solid #0ea5e9; margin: 1.5rem 0;">
      <p style="color: #0c4a6e; margin-bottom: 1rem; font-weight: 600;">
        <strong>Before terraform init:</strong> Create these resources first:
      </p>
      <ul style="color: #0c4a6e;">
        <li>S3 bucket: <code>my-terraform-state-bucket</code></li>
        <li>DynamoDB table: <code>terraform-state-locks</code> (with Primary Key: LockID)</li>
      </ul>
    </div>`,

    `<h4 style="color: #7c3aed; margin: 3rem 0 1.5rem 0; font-size: 1.6rem;">🌐 Other Backends (Pick Your Cloud)</h4>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
      <div style="background: #ecfdf5; padding: 1.5rem; border-radius: 12px; text-align: center;">
        <strong>AWS</strong><br><code>s3 + dynamodb</code>
      </div>
      <div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; text-align: center;">
        <strong>Azure</strong><br><code>azurerm</code>
      </div>
      <div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; text-align: center;">
        <strong>GCP</strong><br><code>gcs</code>
      </div>
      <div style="background: #f3e8ff; padding: 1.5rem; border-radius: 12px; text-align: center;">
        <strong>Git</strong><br><code>git</code>
      </div>
    </div>`,

    `<div style="background: linear-gradient(135deg, #f8fafc, #f1f5f9); padding: 3rem 2.5rem; border-radius: 24px; margin: 4rem 0; border: 3px dashed #cbd5e1;">
      <h3 style="color: #1e293b; margin-bottom: 1.5rem; text-align: center;">⚠️ State Security Checklist</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; text-align: center;">
        <div>
          <div style="font-size: 2rem; color: #ef4444;">🔒</div>
          <strong>Never commit</strong><br><code>terraform.tfstate</code>
        </div>
        <div>
          <div style="font-size: 2rem; color: #10b981;">✅</div>
          <strong>Always use</strong><br>remote backend
        </div>
        <div>
          <div style="font-size: 2rem; color: #f59e0b;">⏰</div>
          <strong>Enable versioning</strong><br>on S3 bucket
        </div>
      </div>
    </div>`
  ],
  code: `################################################################
# 🔥 PRODUCTION STATE CONFIG (Copy-Paste Ready)
################################################################

terraform {
  # Lock to specific Terraform version
  required_version = ">= 1.5.0"
  
  # REMOTE BACKEND CONFIGURATION
  backend "s3" {
    # S3 bucket (create first!)
    bucket         = "my-company-terraform-state"
    
    # File path inside bucket
    key            = "prod/web-app/terraform.tfstate"
    
    # AWS region
    region         = "us-east-1"
    
    # Lock table (prevents concurrent applies)
    dynamodb_table = "terraform-state-locks"
    
    # Optional: Encrypt state
    encrypt        = true
  }
}

# Variables for flexibility
variable "environment" {
  default = "production"
}

variable "aws_region" {
  default = "us-east-1"
}

# Outputs (what you get back)
output "vpc_id" {
  value = aws_vpc.main.id
}

output "state_bucket" {
  value = "my-company-terraform-state"
}`
},

// Terrafrom Modules
{
  id: "modules",
  title: "📦 Modules - Reuse Like LEGO Bricks! (DRY Principle)",
  content: [
    `<div style="background: linear-gradient(135deg, #f8fafc, #f1f5f9); padding: 3rem; border-radius: 24px; margin: 2rem 0; text-align: center;">
      <h3 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 1.9rem;">
        🧱 Modules = Terraform's LEGO System
      </h3>
      <p style="color: #475569; font-size: 1.3rem; max-width: 700px; margin: 0 auto 2rem auto;">
        Write once → Use everywhere → Customize per project
      </p>
      <div style="font-size: 5rem; margin: 1rem 0;">🔄</div>
      <p style="color: #64748b; font-size: 1.2rem;">
        <strong>DRY = Don't Repeat Yourself</strong>
      </p>
    </div>`,

    `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin: 3rem 0;">
      <div style="background: #fef3c7; padding: 2.5rem; border-radius: 20px; border-left: 6px solid #f59e0b;">
        <h4 style="color: #d97706; margin-bottom: 1.5rem;">❌ Copy-Paste Hell</h4>
        <pre style="color: #92400e; font-size: 13px; white-space: pre-wrap; background: transparent; margin: 1rem 0;"><code>resource "aws_instance" "web1" { ... }
resource "aws_instance" "web2" { ... }  # Same code!
resource "aws_instance" "web3" { ... }  # Again!
resource "aws_instance" "db1"  { ... }  # Nightmare!</code></pre>
        <ul style="color: #92400e;">
          <li>🐛 Bugs in 10 places</li>
          <li>⏰ Hard to maintain</li>
          <li>🚫 No consistency</li>
        </ul>
      </div>
      <div style="background: #ecfdf5; padding: 2.5rem; border-radius: 20px; border-left: 6px solid #10b981;">
        <h4 style="color: #059669; margin-bottom: 1.5rem;">✅ Module Magic</h4>
        <pre style="color: #166534; font-size: 13px; white-space: pre-wrap; background: transparent; margin: 1rem 0;"><code>module "web_servers" {
  source = "./modules/web"
  count  = 3
}

module "database" {
  source = "./modules/db"
}</code></pre>
        <ul style="color: #166534;">
          <li>✨ One place to fix</li>
          <li>⚡ Instant reuse</li>
          <li>🔄 Easy updates</li>
        </ul>
      </div>
    </div>`,

    `<h4 style="color: #1e40af; margin: 3rem 0 2rem 0; font-size: 1.6rem;">🎯 Module Anatomy (Simple Recipe)</h4>
    <div style="background: #f8fafc; padding: 2.5rem; border-radius: 20px; border-left: 5px solid #3b82f6; margin: 2rem 0;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
        <div>
          <h5 style="color: #1d4ed8;">📁 Folder Structure</h5>
          <div style="background: #e2e8f0; padding: 1.5rem; border-radius: 12px; font-family: monospace; font-size: 13px; margin-top: 1rem;">
            modules/<br>
            &nbsp;&nbsp;└── web/<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── main.tf<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── variables.tf<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── outputs.tf
          </div>
        </div>
        <div>
          <h5 style="color: #1d4ed8;">🔧 3 Files Needed</h5>
          <ul style="color: #475569; margin-top: 1rem;">
            <li><code>main.tf</code> → Resources</li>
            <li><code>variables.tf</code> → Inputs</li>
            <li><code>outputs.tf</code> → Results</li>
          </ul>
        </div>
      </div>
    </div>`,

    `<h4 style="color: #059669; margin: 3rem 0 2rem 0; font-size: 1.6rem;">🌍 Public Registry (1000s Ready-Made!)</h4>
    <p style="color: #475569;">
      <strong>registry.terraform.io</strong> = Module App Store:
    </p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
      <div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; text-align: center;">
        <strong>AWS VPC</strong><br>
        <code>terraform-aws-modules/vpc/aws</code><br>
        <small>⭐ 2.5k stars</small>
      </div>
      <div style="background: #ecfdf5; padding: 1.5rem; border-radius: 12px; text-align: center;">
        <strong>EKS Cluster</strong><br>
        <code>terraform-aws-modules/eks/aws</code><br>
        <small>⭐ 1.8k stars</small>
      </div>
      <div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; text-align: center;">
        <strong>ALB Load Balancer</strong><br>
        <code>terraform-aws-modules/alb/aws</code><br>
        <small>⭐ 900 stars</small>
      </div>
    </div>
    <p style="color: #475569; font-style: italic; text-align: center; margin-top: 1rem;">
      <a href="https://registry.terraform.io/" target="_blank" style="color: #3b82f6; font-weight: 600; font-size: 1.1rem;">Browse 10,000+ modules → Zero coding!</a>
    </p>`,

    `<h4 style="color: #f59e0b; margin: 3rem 0 2rem 0; font-size: 1.6rem;">🚀 Real Usage Examples</h4>
    <div style="margin: 2rem 0;">
      <div style="background: #ecfdf5; padding: 1.5rem; border-radius: 12px; margin-bottom: 1rem;">
        <h5 style="color: #059669; margin-bottom: 0.5rem;">Local Module</h5>
        <code style="color: #166534; font-size: 13px; white-space: pre-wrap;">module "web_servers" {
  source  = "./modules/web"
  count   = 3
  instance_type = "t3.medium"
}</code>
      </div>
      <div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px;">
        <h5 style="color: #1d4ed8; margin-bottom: 0.5rem;">Registry Module</h5>
        <code style="color: #1e40af; font-size: 13px; white-space: pre-wrap;">module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"
  
  cidr = "10.0.0.0/16"
}</code>
      </div>
    </div>`,

    `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin: 3rem 0;">
      <div style="background: linear-gradient(135deg, #10b98115, #05966915); padding: 2rem; border-radius: 16px; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">📁</div>
        <h5 style="color: #065f46;">Local Modules</h5>
        <p style="color: #166534;">Your private code</p>
      </div>
      <div style="background: linear-gradient(135deg, #3b82f615, #1d4ed815); padding: 2rem; border-radius: 16px; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🌐</div>
        <h5 style="color: #1e40af;">Registry Modules</h5>
        <p style="color: #1e40af;">Community tested</p>
      </div>
      <div style="background: linear-gradient(135deg, #f59e0b15, #d9770615); padding: 2rem; border-radius: 16px; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔗</div>
        <h5 style="color: #d97706;">Git Modules</h5>
        <p style="color: #92400e;">GitHub repos</p>
      </div>
    </div>`,

    `<div style="background: #fef3c7; padding: 3rem 2.5rem; border-radius: 24px; margin: 4rem 0; border-left: 6px solid #f59e0b;">
      <h3 style="color: #92400e; margin-bottom: 1.5rem; text-align: center;">🎁 Module Pro Tips</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; font-size: 1.1rem;">
        <div><strong>📏 Keep small</strong> (1 purpose/module)</div>
        <div><strong>📋 Document inputs/outputs</strong></div>
        <div><strong>🔢 Use <code>count/for_each</code></strong> for multiples</div>
        <div><strong>📤 Publish to registry</strong> when ready</div>
      </div>
    </div>`
  ],
  code: `################################################################
# 🔥 COMPLETE MODULE EXAMPLE (Production Ready)
################################################################

# 1️⃣ CREATE MODULE FOLDER: modules/web/
#    ├── main.tf (below)
#    ├── variables.tf
#    └── outputs.tf

# modules/web/main.tf
resource "aws_instance" "this" {
  ami           = var.ami_id
  instance_type = var.instance_type
  
  tags = merge(var.default_tags, {
    Name = var.server_name
  })
}

# modules/web/variables.tf
variable "ami_id" {}
variable "instance_type" { default = "t3.micro" }
variable "server_name" {}
variable "default_tags" { type = map(string) }

# modules/web/outputs.tf
output "instance_id" { value = aws_instance.this.id }
output "public_ip" { value = aws_instance.this.public_ip }

################################################################
# 2️⃣ USE THE MODULE (root main.tf)
################################################################

module "web_servers" {
  source = "./modules/web"
  
  # Input variables
  ami_id        = "ami-0c02fb55956c7d316"
  instance_type = "t3.medium"
  server_name   = "web-01"
  default_tags = {
    Environment = "production"
    Project     = "ecommerce"
  }
  
  # Multiple servers!
  count = 3
}

# Get outputs
output "web_ips" {
  value = module.web_servers[*].public_ip
}

# 3️⃣ FROM REGISTRY (Zero coding!)
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"
  
  name = "my-vpc"
  cidr = "10.0.0.0/16"
}`
},

// Terraform Advance 
{
  id: "advanced",
  title: "🎓 Advanced Mastery - Pro Level Terraform! ⚡",
  content: [
    `<div style="position: relative; background: linear-gradient(135deg, #1e293b15, #33415515); padding: 4rem 3rem; border-radius: 28px; margin: 2rem 0; text-align: center; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 6px; background: linear-gradient(90deg, #8b5cf6, #ec4899, #10b981, #f59e0b, #3b82f6);"></div>
      <h3 style="color: #1e293b; margin-bottom: 1.5rem; font-size: 2.2rem; font-weight: 800;">
        5 Pro Features = 10x Productivity
      </h3>
      <p style="color: #64748b; font-size: 1.3rem; max-width: 800px; margin: 0 auto 2.5rem;">
        Master these → Deploy production systems like a senior DevOps engineer
      </p>
    </div>`,

    `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem; margin: 3rem 0;">
      <div style="background: linear-gradient(135deg, #8b5cf615, #a78bfa15); padding: 2.5rem; border-radius: 20px; border: 2px solid rgba(139, 92, 246, 0.2); transition: all 0.3s ease; cursor: pointer;" onclick="this.classList.toggle('expanded')">
        <div style="display: flex; align-items: center; margin-bottom: 1rem;">
          <div style="font-size: 3rem; margin-right: 1rem; flex-shrink: 0;">🔧</div>
          <h4 style="color: #7c3aed; margin: 0; font-size: 1.5rem;">Variables & Locals</h4>
        </div>
        <p style="color: #6b7280; margin-bottom: 1rem;">One config rules them all</p>
        <div class="feature-demo" style="font-size: 12px; opacity: 0; max-height: 0; overflow: hidden; transition: all 0.3s ease;">
          <pre style="color: #a78bfa; white-space: pre-wrap; background: rgba(139,92,246,0.1); padding: 1rem; border-radius: 8px;"><code>var.env_name → "prod"
locals.common_tags → Reusable!</code></pre>
        </div>
      </div>
      
      <div style="background: linear-gradient(135deg, #10b98115, #34d39915); padding: 2.5rem; border-radius: 20px; border: 2px solid rgba(16,185,129,0.2); transition: all 0.3s ease; cursor: pointer;" onclick="this.classList.toggle('expanded')">
        <div style="display: flex; align-items: center; margin-bottom: 1rem;">
          <div style="font-size: 3rem; margin-right: 1rem; flex-shrink: 0;">📤</div>
          <h4 style="color: #059669; margin: 0; font-size: 1.5rem;">Outputs</h4>
        </div>
        <p style="color: #6b7280; margin-bottom: 1rem;">Export IPs, IDs, URLs</p>
        <div class="feature-demo" style="font-size: 12px; opacity: 0; max-height: 0; overflow: hidden; transition: all 0.3s ease;">
          <pre style="color: #10b981; white-space: pre-wrap; background: rgba(16,185,129,0.1); padding: 1rem; border-radius: 8px;"><code>terraform output vpc_id
→ vpc-123456789</code></pre>
        </div>
      </div>
      
      <div style="background: linear-gradient(135deg, #f59e0b15, #fbbf2415); padding: 2.5rem; border-radius: 20px; border: 2px solid rgba(245,158,11,0.2); transition: all 0.3s ease; cursor: pointer;" onclick="this.classList.toggle('expanded')">
        <div style="display: flex; align-items: center; margin-bottom: 1rem;">
          <div style="font-size: 3rem; margin-right: 1rem; flex-shrink: 0;">🔢</div>
          <h4 style="color: #d97706; margin: 0; font-size: 1.5rem;">Count & For Each</h4>
        </div>
        <p style="color: #6b7280; margin-bottom: 1rem;">10 servers = 1 line</p>
        <div class="feature-demo" style="font-size: 12px; opacity: 0; max-height: 0; overflow: hidden; transition: all 0.3s ease;">
          <pre style="color: #f59e0b; white-space: pre-wrap; background: rgba(245,158,11,0.1); padding: 1rem; border-radius: 8px;"><code>count  = 5     → [0,1,2,3,4]
for_each = ["a","b"] → ["a","b"]</code></pre>
        </div>
      </div>
    </div>`,

    `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem; margin: 3rem 0;">
      <div style="background: linear-gradient(135deg, #3b82f615, #60a5fa15); padding: 2.5rem; border-radius: 20px; border: 2px solid rgba(59,130,246,0.2); transition: all 0.3s ease; cursor: pointer;" onclick="this.classList.toggle('expanded')">
        <div style="display: flex; align-items: center; margin-bottom: 1rem;">
          <div style="font-size: 3rem; margin-right: 1rem; flex-shrink: 0;">🔄</div>
          <h4 style="color: #1d4ed8; margin: 0; font-size: 1.5rem;">Workspaces</h4>
        </div>
        <p style="color: #6b7280; margin-bottom: 1rem;">1 codebase → 3 environments</p>
        <div class="feature-demo" style="font-size: 12px; opacity: 0; max-height: 0; overflow: hidden; transition: all 0.3s ease;">
          <pre style="color: #3b82f6; white-space: pre-wrap; background: rgba(59,130,246,0.1); padding: 1rem; border-radius: 8px;"><code>ws new dev     → dev state
ws new staging → staging state
ws select prod → prod state</code></pre>
        </div>
      </div>
      
      <div style="background: linear-gradient(135deg, #ec489915, #f8717115); padding: 2.5rem; border-radius: 20px; border: 2px solid rgba(236,72,153,0.2); transition: all 0.3s ease; cursor: pointer;" onclick="this.classList.toggle('expanded')">
        <div style="display: flex; align-items: center; margin-bottom: 1rem;">
          <div style="font-size: 3rem; margin-right: 1rem; flex-shrink: 0;">☁️</div>
          <h4 style="color: #be123c; margin: 0; font-size: 1.5rem;">Terraform Cloud</h4>
        </div>
        <p style="color: #6b7280; margin-bottom: 1rem;">Teams & Enterprise</p>
        <div class="feature-demo" style="font-size: 12px; opacity: 0; max-height: 0; overflow: hidden; transition: all 0.3s ease;">
          <pre style="color: #ec4899; white-space: pre-wrap; background: rgba(236,72,153,0.1); padding: 1rem; border-radius: 8px;"><code>✅ Free remote state
✅ Web UI + API
✅ Policy as Code
✅ VCS Integration</code></pre>
        </div>
      </div>
    </div>`,

    `<h4 style="color: #1e40af; margin: 4rem 0 2.5rem 0; font-size: 1.8rem; text-align: center;">💡 Real-World Power Combo</h4>
    <div style="background: linear-gradient(135deg, #f8fafc, #e2e8f0); padding: 3rem; border-radius: 24px; margin: 2rem 0; border-left: 6px solid #3b82f6;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;">
        <div>
          <h5 style="color: #1d4ed8; margin-bottom: 1.5rem;">Production Web Cluster</h5>
          <pre style="font-size: 13px; color: #475569; white-space: pre-wrap; background: #f1f5f9; padding: 2rem; border-radius: 16px; line-height: 1.6;"><code># variables.tfvars
environment = "prod"
instance_count = 6

# Workspaces: terraform ws select prod

module "web_cluster" {
  source = "./modules/web"
  
  count          = var.instance_count
  instance_type  = "t3.large"
  environment    = var.environment
  
  tags = local.common_tags
}

output "load_balancer_dns" {
  value = module.web_cluster.lb_dns_name
}</code></pre>
        </div>
        <div style="padding-top: 2rem;">
          <h5 style="color: #1d4ed8; margin-bottom: 1.5rem;">What This Creates:</h5>
          <ul style="color: #475569; font-size: 1.1rem; line-height: 1.8;">
            <li>🔢 <strong>6 identical web servers</strong> (count=6)</li>
            <li>🏷️ <strong>Prod tags everywhere</strong> (locals)</li>
            <li>📤 <strong>LB DNS output</strong> for other teams</li>
            <li>🔄 <strong>Separate prod state</strong> (workspace)</li>
          </ul>
        </div>
      </div>
    </div>`,

    `<div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 3.5rem 3rem; border-radius: 28px; margin: 4rem 0; text-align: center; border: 3px solid rgba(245,158,11,0.3);">
      <h3 style="color: #92400e; margin-bottom: 1.5rem; font-size: 2rem;">⚡ Pro Commands Cheat Sheet</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; font-size: 1rem; text-align: left;">
        <div><code style="background: rgba(245,158,11,0.2); padding: 0.5rem 1rem; border-radius: 8px; display: inline-block;">terraform output -json</code><br><small>Structured JSON outputs</small></div>
        <div><code style="background: rgba(245,158,11,0.2); padding: 0.5rem 1rem; border-radius: 8px; display: inline-block;">terraform console</code><br><small>Interactive expressions</small></div>
        <div><code style="background: rgba(245,158,11,0.2); padding: 0.5rem 1rem; border-radius: 8px; display: inline-block;">terraform state list</code><br><small>List tracked resources</small></div>
        <div><code style="background: rgba(245,158,11,0.2); padding: 0.5rem 1rem; border-radius: 8px; display: inline-block;">terraform validate</code><br><small>Syntax check</small></div>
      </div>
    </div>`,

    `<div style="background: linear-gradient(135deg, #ecfdf5, #d1fae5); padding: 3rem 2.5rem; border-radius: 24px; margin: 4rem 0; text-align: center; border-left: 6px solid #10b981;">
      <h3 style="color: #065f46; margin-bottom: 2rem;">🎯 Next Level Challenge</h3>
      <p style="color: #166534; font-size: 1.3rem; margin-bottom: 2.5rem;">
        Build a 3-tier app (VPC + ALB + ECS) using modules + workspaces + Cloud!
      </p>
      <a href="#" style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 1.2rem 3rem; border-radius: 50px; font-weight: 700; font-size: 1.2rem; text-decoration: none; box-shadow: 0 15px 35px rgba(16,185,129,0.4); display: inline-block;">Start Pro Project →</a>
    </div>`
  ],
  
}];

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderMainContent();
  initScrollObserver();
  initCopyButtons();
});

// SIDEBAR RENDER
function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  nav.innerHTML = '';
  
  detailedContent.forEach((section, index) => {
    const navItem = document.createElement('div');
    navItem.className = 'nav-item';
    navItem.innerHTML = `
      <span>${index + 1}.</span>
      ${section.title}
    `;
    navItem.onclick = () => scrollToSection(section.id);
    nav.appendChild(navItem);
  });
}

// MAIN CONTENT RENDER
function renderMainContent() {
  const main = document.getElementById('main-block');
  main.innerHTML = '';
  
  detailedContent.forEach(section => {
    const card = document.createElement('section');
    card.className = 'content-card';
    card.id = section.id;
    
    let content = `<h1 class="card-title">${section.title}</h1>`;
    
    if (section.content) {
      content += `<div class="card-content">`;
      section.content.forEach(p => {
        content += `<p>${p}</p>`;
      });
      content += `</div>`;
    }
    
    if (section.features) {
      content += `<div class="feature-grid">`;
      section.features.forEach(feature => {
        content += `<div class="feature-item">${feature}</div>`;
      });
      content += `</div>`;
    }
    
    if (section.code) {
      content += `
        <div class="code-block">
          <div class="code-header">
            <span>📋 Code Example</span>
            <button class="copy-button">Copy Code</button>
          </div>
          <div class="code-content">${section.code}</div>
        </div>`;
    }
    
    card.innerHTML = content;
    main.appendChild(card);
  });
}

// SCROLL & NAVIGATION
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function initScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Update active nav
        document.querySelectorAll('.nav-item').forEach(item => {
          item.classList.remove('active');
        });
        
        const targetNav = Array.from(document.querySelectorAll('.nav-item'))
          .find(item => item.textContent.includes(entry.target.id));
        if (targetNav) targetNav.classList.add('active');
        
        // Animate card
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '-20% 0px -30% 0px'
  });
  
  document.querySelectorAll('.content-card').forEach(card => {
    observer.observe(card);
  });
}

// COPY FUNCTIONALITY
function initCopyButtons() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-button')) {
      const codeBlock = e.target.closest('.code-block').querySelector('.code-content');
      const codeText = codeBlock.textContent;
      
      navigator.clipboard.writeText(codeText).then(() => {
        const button = e.target;
        const original = button.textContent;
        button.textContent = '✅ Copied!';
        button.classList.add('success');
        
        setTimeout(() => {
          button.textContent = original;
          button.classList.remove('success');
        }, 2000);
      });
    }
  });
}