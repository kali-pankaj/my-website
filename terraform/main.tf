# Provider Defiend
provider "aws"{
    region = "us-east-1"
    profile = "default"
}

# VPC
resource "aws_vpc" "my_vpc" {
    cidr_block = "10.100.0.0/16"

    tags = {
        Name = "my-vpc"
    }
}

# SUBNET
resource "aws_subnet" "my_subnet" {
    vpc_id                  = aws_vpc.my_vpc.id
    cidr_block              = "10.100.1.0/24"
    availability_zone       = "us-east-1a"
    map_public_ip_on_launch = true  

    tags = {
      Name = "my-subnet"
    }
}

# SECURITY GROUPS
resource "aws_security_group" "my_sg" {
  name    = "my-sg"
  vpc_id  = aws_vpc.my_vpc.id

  ingress  {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks  = ["0.0.0.0/0"]
  }

  ingress  {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags  = {
    Name    = "my-sg"
  }
}

# KEY PEIR
resource "aws_key_pair" "my_key" {
  key_name   = "my-ec2-key"
  public_key = file("~/.ssh/id_ed25519.pub")
}

# EE2 INSTANCE
resource "aws_instance" "my_instance" {
  ami               = "ami-0c02fb55956c7d316" 
  instance_type     = "t3.medium" 
  subnet_id         =  aws_subnet.my_subnet.id
  vpc_security_group_ids = [aws_security_group.my_sg.id]

  key_name = aws_key_pair.my_key.key_name

  tags = {
    Name            = "pankaj"
    Team            = "DevOps"
    Application     = "website"
  }
}

# OUTPUT 
output "instance_public_ip" {
  value = aws_instance.my_instance.public_ip
}

#  OUTPUT
output "instance_id" {
    value = aws_instance.my_instance.id
}