provider "aws" {
  region  = var.region
  profile = "default"
}

# VPC
resource "aws_vpc" "my_vpc" {
  cidr_block = var.vpc_cidr

  tags = {
    Name = "my-vpc"
  }
}

# Subnet
resource "aws_subnet" "my_subnet" {
  vpc_id                  = aws_vpc.my_vpc.id
  cidr_block              = var.subnet_cidr
  availability_zone       = var.availability_zone
  map_public_ip_on_launch = true

  tags = {
    Name = "my-subnet"
  }
}

# Security Group
resource "aws_security_group" "my_sg" {
  name   = "my-sg"
  vpc_id = aws_vpc.my_vpc.id

  ingress {
    from_port   = var.ssh_port
    to_port     = var.ssh_port
    protocol    = "tcp"
    cidr_blocks = var.allowed_cidr_blocks
  }

  ingress {
    from_port   = var.http_port
    to_port     = var.http_port
    protocol    = "tcp"
    cidr_blocks = var.allowed_cidr_blocks
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = var.allowed_cidr_blocks
  }

  tags = {
    Name = "my-sg"
  }
}

# Key Pair
resource "aws_key_pair" "my_key" {
  key_name   = var.key_name
  public_key = file("~/.ssh/id_ed25519.pub")
}

# EC2 Instance
resource "aws_instance" "my_instance" {
  ami                    = var.ami
  instance_type          = var.instance_type
  subnet_id              = aws_subnet.my_subnet.id
  vpc_security_group_ids = [aws_security_group.my_sg.id]

  key_name = var.key_name

  tags = {
    Name        = "pankaj"
    Team        = "DevOps"
    Application = "website"
  }
}

# Outputs
output "instance_public_ip" {
  value = aws_instance.my_instance.public_ip
}

output "instance_id" {
  value = aws_instance.my_instance.id
}