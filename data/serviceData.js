// export const servicesData = [
//     {
//         id: "web_development",
//         title: "Web Development",
//         img: "services-1.jpg",
//         icon: "bi-code-slash",
//         subtitle: "Tailoring Tally to specific business needs.",
//         description:
//             "We create modern and responsive website designs tailored to your business.",
//         image: "/images/services.jpg",
//         points: [
//             "Responsive design",
//             "Modern UI/UX",
//             "SEO friendly",
//         ],
//         categories: [
//             {
//                 id: "frontend",
//                 title: "Frontend Development",
//                 items: [
//                     { name: "React Development", slug: "react" },
//                     { name: "HTML/CSS Websites", slug: "html-css" },
//                     { name: "Landing Pages", slug: "landing-pages" },
//                     { name: "Responsive Design", slug: "responsive" },
//                 ],
//             },
//             {
//                 id: "backend",
//                 title: "Backend Development",
//                 items: [
//                     { name: "Node.js Development", slug: "nodejs" },
//                     { name: "PHP Development", slug: "php" },
//                     { name: "Laravel Development", slug: "laravel" },
//                     { name: "API Development", slug: "api" },
//                 ],
//             },
//             {
//                 id: "fullstack",
//                 title: "Full Stack Solutions",
//                 items: [
//                     { name: "MERN Stack", slug: "mern" },
//                     { name: "Custom Web Apps", slug: "custom-web-apps" },
//                     { name: "E-commerce Development", slug: "ecommerce" },
//                 ],
//             },
//         ],
//     },

import { Feather, Group } from "lucide-react";

export const servicesData = [
  // {
  //   id: "web_development",
  //   title: "Web Development",
  //   img: "services-1.jpg",
  //   icon: "bi-code-slash",
  //   subtitle: "Tailoring Tally to specific business needs.",
  //   description:
  //     "We create modern and responsive website designs tailored to your business.",
  //   image: "/images/services.jpg",
  //   points: [
  //     "Responsive design",
  //     "Modern UI/UX",
  //     "SEO friendly",
  //   ],
  //   categories: [
  //     {
  //       id: "frontend",
  //       title: "Frontend Development",
  //       items: [
  //         { name: "React Development", slug: "react" },
  //         { name: "HTML/CSS Websites", slug: "html-css" },
  //         { name: "Landing Pages", slug: "landing-pages" },
  //         { name: "Responsive Design", slug: "responsive" },
  //       ],
  //     },
  //     {
  //       id: "backend",
  //       title: "Backend Development",
  //       items: [
  //         { name: "Node.js Development", slug: "nodejs" },
  //         { name: "PHP Development", slug: "php" },
  //         { name: "Laravel Development", slug: "laravel" },
  //         { name: "API Development", slug: "api" },
  //       ],
  //     },
  //     {
  //       id: "fullstack",
  //       title: "Full Stack Solutions",
  //       items: [
  //         { name: "MERN Stack", slug: "mern" },
  //         { name: "Custom Web Apps", slug: "custom-web-apps" },
  //         { name: "E-commerce Development", slug: "ecommerce" },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   id: "crm",
  //   title: "Custom Software Development Services",
  //   subtitle: "We design and develop responsive, high-performance websites and web applications tailored to your business needs.",
  //   description:
  //     "Custom software solutions to automate and scale your business operations.",
  //   image: "/images/services.jpg",
  //   points: [
  //     "Custom ERP systems",
  //     "CRM solutions",
  //     "Automation tools",
  //   ],
  //   img: "services-3.jpg",
  //   icon: "bi-people",
  //   categories: [
  //     {
  //       id: "crm-solutions",
  //       title: "CRM Solutions",
  //       items: [
  //         { name: "Sales CRM", slug: "sales-crm" },
  //         { name: "Lead Management", slug: "lead-management" },
  //         { name: "Customer Support Systems", slug: "support-system" },
  //       ],
  //     },
  //     {
  //       id: "erp-systems",
  //       title: "ERP Systems",
  //       items: [
  //         { name: "Inventory Management", slug: "inventory" },
  //         { name: "HR Management", slug: "hrm" },
  //         { name: "Accounting Systems", slug: "accounting" },
  //       ],
  //     },
  //     {
  //       id: "automation",
  //       title: "Automation Tools",
  //       items: [
  //         { name: "Workflow Automation", slug: "workflow" },
  //         { name: "Business Process Automation", slug: "bpa" },
  //         { name: "Reporting Dashboards", slug: "dashboard" },
  //       ],
  //     },
  //   ],
  // },

  {
    id: "tally",
    title: "Tally Customization & Integration Solutions",
    subtitle: "We provide custom software solutions for businesses including CRM, ERP, and automation systems.",
    description:
      "Custom TDL modules, Tally Prime enhancements, reports, controls, and integrations built around your business process..",
    image: "/images/services.jpg",
    points: [
      "Inventory tracking",
      "Product lifecycle",
      "Reports & analytics",
    ],
    // img: "services-1.jpg",
    icon: "bi-calculator",
    categories: [
      {
        id: "tally-software",
        title: "Tally Softwares",
        items: [
          {
            name: "Tally Software",
            slug: "tally-software",
            icon: "bi-calculator-fill",
            description: "Complete business accounting and inventory management solution."

          },
          {
            name: "Tally Prime",
            slug: "tally-prime",
            icon: "bi-bar-chart-fill",
            description: "Modern business management software with powerful reporting."

          },
          {
            name: "TSS",
            slug: "tss",
            icon: "bi-cloud-check-fill",
            description: "Stay updated with latest features and statutory compliance."
          },
        ],
      },
      {
        id: "tally-services",
        title: "Tally Services",
        items: [
          {
            name: "Tally on Cloud",
            slug: "tally-cloud"
          },
          {
            name: "Support",
            slug: "support"
          },
        ],
      },
      {
        id: "tally-customise",
        slug: "customization",
        title: "Tally Customise",
        items: [
          {
            category: "Industry-Specific Business Modules",
            title: "Education",
            services: [
              {
                name: "School / College ERP",
                slug: "school_college",
                icon: "bi-mortarboard"
              },
              {
                name: "Wholesale Garment",
                slug: "wholesale_garment",
                icon: "bi-bag"
              },
              {
                name: "Mobile Shoppe/ Home Application",
                slug: "mobile_shoppe_home_application",
                icon: "bi-phone"
              },
              {
                name: "Hospital Management",
                slug: "hospital_management",
                icon: "bi-heart-pulse"
              },
              {
                name: "APMC / ADA",
                slug: "apmc_ada",
                icon: "bi-shop"
              },
              {
                name: "Petrol Pump",
                slug: "petrol_pump",
                icon: "bi-fuel-pump"
              },
              {
                name: "Jewellary Module",
                slug: "jewellary_module",
                icon: "bi-gem"
              },
              {
                name: "Dairy Integration with Dairy Software Via API",
                slug: "dairy_integration",
                icon: "bi-cup-hot"
              },
              {
                name: "Share Market",
                slug: "share_market",
                icon: "bi-graph-up"
              },
              {
                name: "Fruit Adat",
                slug: "fruit_adat",
                icon: "bi-basket"
              },
              {
                name: "Material Requisition",
                slug: "material_requisition",
                icon: "bi-box-seam"
              }


            ]
          },

          {
            category: "Billing, Invoice & POS Customization",

            services: [
              {
                name: "Normal Bill Printing to POS Bill Printing",
                slug: "normal_pos",
                icon: "bi-printer"
              },
              {
                name: "Discount Schema(Payment-Based)",
                slug: "discount_schema",
                icon: "bi-percent"
              },

            ]
          },

          {
            category: "Inventory, Stock & Manufacturing",
            services: [
              {
                name: "Bank Statement",
                slug: "bank_statement",
                icon: "bi-bank"
              },
              {
                name: "Purchase Requisition Note",
                slug: "purchase_note",
                icon: "bi-cart-check"
              },
            ]
          },
          {
            category: "Reports, MIS & Business Analysis",
            services: [
              {
                name: "Multi-Settelment With Auto Receipt",
                slug: "multi_settlement",
                icon: "bi-receipt"
              },
              {
                name: "MIS Dashboards",
                slug: "mis_dashboards",
                icon: "bi-graph-up"
              },
              {
                name: "Multi-Settelment With Auto Receipt",
                slug: "multi_settlement",
                icon: "bi-receipt"
              }
            ]
          },
          {
            category: "Security, Controls & Approval Workflow",
            services: [
              {
                name: "Advanced Security",
                slug: "advanced_security",
                icon: "bi-shield-lock"
              },
              {
                name: "Email OTP Login for Admin",
                slug: "email_otp",
                icon: "bi-shield-check"
              },
              {
                name: "Recycle Bin Voucher Delete by Password",
                slug: "recycle_bin",
                icon: "bi-trash"
              }
            ]
          },
          {
            category: "GST, Tax & Compliance",
            services: [
              {
                name: "Discount Schema(Payment-Based)",
                slug: "discount_schema",
                icon: "bi-percent"
              },
              {
                name: "Tax Compliance",
                slug: "tax_compliance",
                icon: "bi-gear"
              }
            ]
          },
          {
            category: "Import, Export, Email & Document Automation",
            services: [
              {
                name: "Document Linking System in Tally Prime Using DLL",
                slug: "doc_link",
                icon: "bi-link-45deg"


              }
            ]
          },
          {
            category: "Payment, Receipt & Outstanding Management",
            services: [
              {
                name: "Normal Bill Printing to POS Bill Printing",
                slug: "normal_pos",
                icon: "bi-printer"
              }
            ]
          },
          {
            category: "Workflow, Task & Utility Modules",
            services: [
              {
                name: "Normal Bill Printing to POS Bill Printing",
                slug: "normal_pos",
                icon: "bi-printer"
              },
              {
                name: "Warranty & AMC",
                slug: "warranty_amc",
                icon: "bi-patch-check"
              },
              {
                name: "Other Software Integration With Tally Via API",
                slug: "api_integration",
                icon: "bi-diagram-3"
              },
              {
                name: "Random Bulk Cost Adjustment Entries",
                slug: "bulk_cost_adjustment",
                icon: "bi-calculator"
              }
            ]
          }

        ]
      },
    ],
  },

  {
    id: "crm",
    title: "Custom Software Development",
    subtitle: "We design and develop responsive, high-performance websites and web applications tailored to your business needs.",
    description:
      "Web applications, mobile apps, CRM systems, ERP modules, dashboards, support systems, and automation tools built around your workflow.",
    img: "software.jpg",
    points: [
      "Custom ERP systems",
      "CRM solutions",
      "Automation tools",
    ],
    // img: "services-3.jpg",
    icon: "bi-code-slash",
    categories: [
      {
        id: "crm-solutions",
        title: "CRM Solutions",
        items: [
          { name: "Sales CRM", slug: "sales-crm" },
          { name: "Lead Management", slug: "lead-management" },
          { name: "Customer Support Systems", slug: "support-system" },
        ],
      },
      {
        id: "erp-systems",
        title: "ERP Systems",
        items: [
          { name: "Inventory Management", slug: "inventory" },
          { name: "HR Management", slug: "hrm" },
          { name: "Accounting Systems", slug: "accounting" },
        ],
      },
      {
        id: "automation",
        title: "Automation Tools",
        items: [
          { name: "Workflow Automation", slug: "workflow" },
          { name: "Business Process Automation", slug: "bpa" },
          { name: "Reporting Dashboards", slug: "dashboard" },
        ],
      },
    ],
  },
  

  {
    id: "business_process_automation",
    title: "Business Process Automation",
    img: "working-4.jpg",
    icon: "bi-gear",
    subtitle: "Automating everyday business operations.",
    description:
      "Reduce repetitive work, manual data entry, follow-ups, reporting delays, and disconnected workflows with smart automation.",
    // image: "/images/services.jpg",
    points: [
      "Workflow Automation",
      "Report Automation",
      "Process Automation"
    ],
  },
  {
    id: "support_implementation",
    title: "Support & Implementation",
    img: "working-3.jpg",
    icon: "bi-tools",
    subtitle: "Supporting every stage of implementation.",
    description:
      "We support clients through requirement study, development, testing, deployment, training, and continuous improvement",
    // image: "/images/services.jpg",
    points: [
      "Deployment & Configuration",
      "Bug Fixes & Enhancements",
      "Ongoing Technical Support"
    ],
  },
];

export const customization_data = [
  {
    id: 'school_college',
    title: "School/ College",
    banner: "/images/school.png",
    subtitle:
      "For schools and colleges, FlowupS can build Tally-based or custom software workflows for admissions, student records, fees, documents, certificates, transport, staff payroll, and reporting.",

   

    features: [
      {
        title: "Student Management",

        image:
          "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",

        description:
          "This feature helps in storing and organizing all student-related information like admission,attendance, and performance. It makes it easy to track and manage student records.",
      },

      {
        title: "Fees Management",

        image:
          "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",

        description:
          "It allows the institution to collect, record, and track fee payments from students. The system also helps in generating receipts and sending reminders for due payments.",
      },

      {
        title: "Document Management",

        image:
          "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",

        description:
          "This helps in storing and managing important documents like certificates, admission forms,and academic records. It ensures all documents are safe, organized, and easily accessible.",
      },

      {
        title: "Transport Management",

        image:
          "https://images.pexels.com/photos/2946776/pexels-photo-2946776.jpeg",

        description:
          "It manages the transportation details like bus routes, driver info, and student pick-up/drop points. It improves the safety and efficiency of school or college transport services.",
      },

      {
        title: "Easy Promotion/Migration",

        image:
          "https://media.istockphoto.com/id/2148327938/photo/woman-uses-laptop-successful-curly-haired-hispanic-or-brazilian-woman-in-stylish-elegant.jpg?s=612x612&w=0&k=20&c=HkpeVdjSo1_aR__FVcwalFkHWy_rRbi74iYezNS0VAo=",

        description:
          "This feature helps in promoting students to the next class or migrating them to another course. It reduces manual work and avoids errors in academic records",
      },

      {
        title: "ID card, Bonafide, LC printing",

        image:
          "https://media.istockphoto.com/id/2208930120/vector/id-vector-icon-which-can-easily-modify-or-edit.jpg?s=612x612&w=0&k=20&c=sYgMdBITVC8E8kjPs4uAJCAYyjx-JbNFicktg9W0_zU=",

        description:
          "It helps in quickly generating ID cards, Bonafide certificates, and leaving certificates. This saves time and ensures professional, standardized documents.",
      },

      {
        title: "Payroll module for staff",

        image:
          "https://media.istockphoto.com/id/1356911722/vector/payroll-income-concept-salary-payment-annual-bonus-payout-with-paper-calculator-and-people.jpg?s=612x612&w=0&k=20&c=pg9rRwfrsBTO0xCdntzYkr_Sy9uXbfl9yKuZcUwNi_E=Taly Customization Categories",

        description:
          "This handles staff salary, attendance, and deductions. It makes salary processing accurate,faster, and less stressful for the management.",
      },
    ],
  },
  {
    id: 'wholesale_garment',
    title: "Wholesale Garment",
    banner: "/images/services-2.jpg",
    features: [
      {
        title: "Multiple Types of Stock Items",
        image: "/images/services-1.jpg",
        description: "You can manage various types of clothes like shirts, pants, t-shirts, dresses, etc.",
        description1: "It allows you to add different brands, categories, or types as separate stock items.",
      },
      {
        title: "Set Different Sizes for Different Items:",
        image: "/images/services-2.jpg",
        description: "You can assign different size options (S, M, L, XL, etc.) to each type of clothing.",
        description1: "For example, shirts can have M, L, XL, and pants can have 30, 32, 34, etc."
      },
      {
        title: "Supports Around 500 Sizes",
        image: "/images/services-3.jpg",
        description: "This module can handle size options easily.",
        description1: "No confusion or limitation, even for large stock"
      },
      {
        title: "Print on 1 Page–MRP Wise and Size Wise:",
        image: "https://media.istockphoto.com/id/1294447918/photo/wood-alphabet-letter-in-word-mrp-on-green-grass-background.jpg?s=612x612&w=0&k=20&c=v8LywJXXYPDr4bym1Ygimjc3xULzyt2PnEJITz8JD2I=",
        description: "You can print your item list on one page showing MRP and Size.",
        description1: "This saves paper and gives a clear overview of prices and available sizes."
      },
      {
        title: "Track Items by MRP, Size, Color, Type:",
        image: "https://media.istockphoto.com/id/2177518475/video/many-different-shapes-created-on-a-3d-printer-3d-technology.jpg?s=640x640&k=20&c=F2uUy99fnH8F7iaKHSjrILwncObCyMrjI8H4DbChgIc=",
        description: "Easily find and manage garments based on their price, size, color, or type.",
        description1: "Helps in quick billing and stock verification."
      },
      {
        title: ".Category-Wise Report",
        image: "https://media.istockphoto.com/id/2241545451/vector/security-report-concept-in-orange-color.jpg?s=612x612&w=0&k=20&c=r36VzvLEky3pGp0sxHzAlL__8anL-61nPGoYlaRHct8=",
        description: "Get reports according to categories like Men’s Wear, Women’s Wear, Kids Wear,etc.",
        description1: "Helps in analyzing which category is selling more."
      },


      {
        title: "Advanced QR Code for Sales:",
        image: "https://media.istockphoto.com/id/1487255881/photo/let-me-scan-to-register-first.jpg?s=612x612&w=0&k=20&c=n5QeNiDPdpEsmJmvqF-lQsddYQA22tQFXWa4w8BD6pE=",
        description: "Each item can have a QR Code for faster billing and scanning.",
        description1: "Improves speed and accuracy in sales entry."
      }
    ],


  },
  {
    id: 'mobile_shoppe_home_application',
    title: "Mobile Shoppe/Home Application",
    banner: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
    subtitle:"",
    features: [
      {
        title: "IMEI and Serial Number Tracking",
        image: "/images/services-1.jpg",
        description: "You can record and track each mobile by its IMEI number and Serial No. Wise during sale and purchase.",
      },
      {
        title: "IMEI and Serial No. Wise Searching Report",
        image: "/images/services-2.jpg",
        description: "Easily search and find details of any mobile phone using its IMEI number andSerial No. Wise.",
      },
      {
        title: "Multiple Payment Options at Sale",
        image: "/images/services-3.jpg",
        description: "Accept different types of payments like cash, card, UPI, EMI, etc. at the time of sal.",
      },
      {
        title: "Finance Management at Sales",
        image: "https://media.istockphoto.com/id/881542122/photo/business-people-using-pen-tablet-notebook-are-planning-a-marketing-plan-to-improve-the-quality.jpg?s=612x612&w=0&k=20&c=zSo6zX4zgsOYBQpw_7Xcz3nX_sXqwHr0mSzEGkUREUg=",
        description: "Track and manage sales made on EMI or loan, with proper reports.",
      },
      {
        title: "Advanced Barcode",
        image: "/images/about-2.jpg",
        description: "Generate and print barcodes for easy billing and inventory tracking.",
      },
      {
        title: "Sales Through Barcode Scanning",
        image: "https://media.istockphoto.com/id/1408900354/photo/happy-online-store-owner-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=WHpAFqMhuQXHRlrm9OX1w4JTHUdxEUAuKm0jlZA0EHM=",
        description: "Quickly bill products by scanning barcodes at the counter.",
      },
      {
        title: "View Customer History from IMEI No. and Serial No.Wise",
        image: "/images/working-1.jpg",
        description: "Find the customer's past purchase history using their mobile's IMEI number and Serial No Wise.",
      },
      {
        title: "Provision to Set AMC / Warranty",
        image: "/images/working-2.jpg",
        description: "Maintain AMC (Annual Maintenance Contract) or warranty details for each product sold.",
      },
      {
        title: "AMC Register/Warranty Register",
        image: "/images/working-3.jpg",
        description: "Keep a full register of all AMCs and warranties, so you never miss any service or expiry dates..",
      },

    ]
  },
  {
    id: "audit_trail",
    title: "Audit Trail",
    banner:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",

    features: [

      {
        title: "Track Every Transaction Change",

        image:
          "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

        description:
          "Records every Add, Edit, or Delete action performed on vouchers with complete history including date, time, and user details.",
      },

      {
        title: "User Wise Activity Log",

        image:
          "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",

        description:
          "Shows which user made which change and when. Helps monitor staff activities efficiently in multi-user business environments.",
      },

      {
        title: "Voucher History Report",

        image:
          "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",

        description:
          "View the complete version history of every voucher including modifications in amount, narration, ledger, and transaction details.",
      },

      {
        title: "Time Stamp with User ID",

        image:
          "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",

        description:
          "Every action is automatically saved with exact timestamp and username for accurate auditing and internal verification.",
      },

      {
        title: "Easy Comparison of Changes",

        image:
          "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",

        description:
          "Compare old and new values side-by-side to review changes quickly and maintain approval transparency.",
      },

      {
        title: "Audit Trail Report by Date/User",

        image:
          "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg",

        description:
          "Generate detailed audit reports based on specific dates or users for accountability and discrepancy resolution.",
      },

      {
        title: "GST & Income Tax Compliance",

        image:
          "https://images.pexels.com/photos/4386371/pexels-photo-4386371.jpeg",

        description:
          "Supports MCA compliance requirements under Companies Act 2013 and helps maintain proper audit trail records.",
      },

      {
        title: "No Manual Tampering Possible",

        image:
          "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",

        description:
          "Audit trail entries are system-generated and cannot be deleted or modified manually, ensuring maximum security.",
      },

      {
        title: "Seamless Integration in Tally Prime",

        image:
          "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",

        description:
          "Works smoothly inside Tally Prime without external software and delivers secure performance without slowing the system.",
      },

    ],
  },
  {
    id: 'purchase_note',
    title: "Purchase Requisition Note(PRN)",
    banner: "/images/services-2.jpg",
    subtitle:"",
    features: [
      {
        title: " Create Requisition Notes",
        image: "/images/working-3.jpg",
        description: " Departments can raise requests for required items.",
        description1: "Useful for Production, Sales, Accounts, and other teams."
      },
      {
        title: " Department-Wise Request Management",
        image: "/images/working-4.jpg",
        description: " Requests are managed systematically department-wise.",
        description1: "Ensures proper tracking and coordination."
      },
      {
        title: " Item Requirement Details",
        image: "/images/working-4.jpg",
        description: " Mention item name, quantity, purpose, and delivery date.",
        description1: "Helps avoid confusion in purchasing."
      },
      {
        title: " Item Requirement Details",
        image: "/images/working-4.jpg",
        description: "  Every request is saved in Tally as a requisition document.",
        description1: "Maintains proper records for future reference."
      },
      {
        title: " Purchase Linking Facility",
        image: "/images/working-4.jpg",
        description: "Requisition can be linked directly with Purchase.",
        description1: " Simplifies purchase processing."
      },
      {
        title: " Avoids Duplicate Purchases",
        image: "/images/working-4.jpg",
        description: "Prevents over-ordering and duplicate buying.",
        description1: "Improves inventory planning."
      },
      {
        title: " Request Status Tracking",
        image: "/images/working-4.jpg",
        description: "Track status like Pending, Approved, Rejected, and Fulfilled.",
        description1: "Helps identify urgent and routine requirements easily."
      },
      {
        title: "Requisition Reports",
        image: "/images/working-3.jpg",
        description: "Generate reports like Requisition Summary and Pending Items.",
        description1: "Provides better monitoring and analysis."
      },
      {
        title: " Convert PRN to Purchase Order",
        image: "/images/working-1.jpg",
        description: "Option to convert PRN directly into Purchase Order.",
        description1: "Reduces manual work and saves time."
      },
      {
        title: "Full Transparency",
        image: "/images/working-2.jpg",
        description: "Shows who raised the request, when, and for what purpose.",
        description1: " Improves accountability."
      },
      {
        title: "Requisition History Maintenance",
        image: "/images/working-3.jpg",
        description: " Maintains complete requisition history.",
        description1: "Useful for future analysis and audits"
      },
      {
        title: "Print & Export Facility",
        image: "/images/working-1.jpg",
        description: " Can be printed or exported as PDF.",
        description1: "Easy for approvals and offline use."
      },
    ]

  },
  {
    id: 'discount_schema',
    title: "Discount Schema(Payment-Based)",
    banner: "/images/services-2.jpg",
    features: [

      {
        title: "On-Screen Discount Notification",

        image:
          "https://images.pexels.com/photos/4386367/pexels-photo-4386367.jpeg",

        description:
          "Automatically shows payment discount offers during Sales Invoice or Receipt Voucher creation for customer awareness.",
      },

      {
        title: "Print on Invoice & Receipt",

        image:
          "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

        description:
          "Discount offers and payment terms are printed directly on invoices and receipts for clear communication.",
      },

      {
        title: "Flexible Discount Configuration",

        image:
          "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",

        description:
          "Easily update discount percentage and payment duration without any programming changes.",
      },

      {
        title: "Partywise Billwise Reports",

        image:
          "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",

        description:
          "Generate customer-wise and bill-wise discount reports for accurate payment tracking and analysis.",
      },

      {
        title: "Customer Payment Awareness",

        image:
          "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",

        description:
          "Helps customers clearly understand available payment offers and encourages faster payments.",
      },

      {
        title: "No Changes in Accounting Entries",

        image:
          "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",

        description:
          "Works only as an informational module and does not modify accounting entries automatically.",
      },

      {
        title: "Improves Cash Flow",

        image:
          "https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg",

        description:
          "Encourages early payment collection and reduces pending dues for smoother business cash flow.",
      },

      {
        title: "Transparent Offer Communication",

        image:
          "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

        description:
          "Ensures all customers receive consistent and transparent discount offer communication.",
      },

      {
        title: "Multi-Level Discount Scheme",

        image:
          "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg",

        description:
          "Supports different discount slabs like 5%, 3%, and 1% based on payment duration.",
      },

    ],
  },
  {
    id: "bank_statement",
    title: "Bank Statement Import ",
    banner: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGJhbmt8ZW58MHx8MHx8fDA%3D",
    features: [
      {
        title: "Import Excel Bank Statements into Tally",
        image: "https://images.unsplash.com/photo-1763872849312-67984fbf5f68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJBTkslMjBTVEFURU1FTlQlMjBJTVBPUlQlMjBNT0RVTEV8ZW58MHx8MHx8fDA%3D",
        description: "Convert your bank statement to Excel and directly bring it into Tally.",
        description1: "No more typing each entry manually."
      },
      {
        title: "Works with Any Bank, Any Format",
        image: "https://images.unsplash.com/photo-1576765915649-b6f4be4ec5c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJBTkslMjBTVEFURU1FTlQlMjBJTVBPUlQlMjBNT0RVTEUlMjBXb3JrcyUyMHdpdGglMjBBbnklMjBCYW5rJTJDJTIwQW55JTIwRm9ybWF0fGVufDB8fDB8fHww",
        description: "Supports all Indian banks – HDFC, SBI, ICICI, Axis, etc.",
        description1: "No fixed format needed. It accepts almost all Excel layouts."
      },
      {
        title: "Easy Excel Column Mapping",
        image: "https://images.unsplash.com/photo-1678564205744-3dc5913fc3fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJBTkslMjBTVEFURU1FTlQlMjBJTVBPUlQlMjBNT0RVTEUlMjBXb3JrcyUyMHdpdGglMjBBbnklMjBCYW5rJTJDJTIwQW55JTIwRm9ybWF0fGVufDB8fDB8fHww",
        description: "Match your Excel fields (Date, Amount, Narration) with Tally fields easily.",
        description1: "One-time setup; use it again and again."
      },
      {
        title: "Supports Double & Single Amount Mode",
        image: "https://images.unsplash.com/photo-1565371768838-2479eb537a78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJBTkslMjBTVEFURU1FTlQlMjBJTVBPUlQlMjBNT0RVTEUlMjBXb3JrcyUyMHdpdGglMjBBbnklMjBCYW5rJTJDJTIwQW55JTIwRm9ybWF0fGVufDB8fDB8fHww",
        description: "You can use either Debit/Credit format or Single column amount.",
        description1: "Flexible as per your Excel data style."
      },
      {
        title: ".Find & Replace Utility",
        image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFua3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Quickly search any text in narration or fields and replace it before importing.",
        description1: "Useful for correcting account names or standardizing ledgers."
      },
      {
        title: "Narration Filter Utility",
        image: "https://plus.unsplash.com/premium_photo-1674726322494-f972e5486bc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJhbmt8ZW58MHx8MHx8fDA%3D",
        description: "Automatically detects keywords like “ATM”, “NEFT”, “Salary”, etc.",
        description1: "Helps in posting to correct ledger accounts based on narration."
      },
      {
        title: "Change Voucher Type in Bulk",
        image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmt8ZW58MHx8MHx8fDA%3D",
        description: "Apply voucher type (Payment, Receipt, Contra, Journal) to all entries at once.",
        description1: "Saves lots of time when importing hundreds of rows."
      },
      {
        title: "How This Helps You",
        image: "https://plus.unsplash.com/premium_photo-1679814366168-f6f39e7e8ae4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFua3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Saves 90% time in bank entry posting",
        description1: "Reduces errors due to manual typing",
        description2: "Handles bulk data with ease",
        description3: "Clean & organized accounting in Tally"
      },
      {
        title: "Ideal For",
        image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJhbmt8ZW58MHx8MHx8fDA%3D",
        description: "Small & Medium Businesses",
        description1: "Accountants handling multiple clients",
        description2: "Traders, Shops, and Service Providers"
      }
    ]

  },
  {
    id: "hospital_management",
    title: " Hospital Management ",
    banner: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
   
   subtitle:"For hospitals and clinics, we can support OPD/IPD billing, patient records, bed management, doctor management, receipts, discharge summaries, and hospital financial reporting.",
   subtitle:"",
   features: [
      {
        title: "Ward and Bed Management",
        image: "https://images.unsplash.com/photo-1628373961147-87e7f514a35f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGhvc3BpdGFsfGVufDB8fDB8fHww",
        description: "Allocate and manage wards and beds efficiently.",
        description1: "Track vacant, occupied, and reserved beds in real-time."
      },
      {
        title: "Doctors Management",
        image: "https://plus.unsplash.com/premium_photo-1681995284211-b0ea14a73cbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhvc3BpdGFsfGVufDB8fDB8fHww",
        description: "Maintain doctor profiles, schedules, and specialties.",
        description1: "Track OPD and IPD patient attendance and remuneration."
      },
      {
        title: "Patient Management",
        image: "https://plus.unsplash.com/premium_photo-1681995206380-babb9b6debc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhvc3BpdGFsfGVufDB8fDB8fHww",
        description: "Register new patients and maintain complete patient records",
        description1: "Easy access to visit history and billing info."
      },
      {
        title: "OPD Billing",
        image: "https://images.unsplash.com/photo-1753955900180-142efbf4c162?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T1BEJTIwQmlsbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Generate bills for outpatient visits instantly.",
        description1: "Supports different consultation fees, services, and medicines."
      },
      {
        title: "IPD Admission",
        image: "https://plus.unsplash.com/premium_photo-1681843129112-f7d11a2f17e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
        description: "Admit patients for in-patient treatment with detailed records",
        description1: "Assign wards and beds, and link with doctor details."
      },
      {
        title: "Bed Shifting ",
        image: "https://plus.unsplash.com/premium_photo-1681995326134-cdc947934015?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
        description: "Easily update records when patients are shifted between beds or wards"
      },
      {
        title: "IPD Receipt",
        image: "https://plus.unsplash.com/premium_photo-1726769176212-1ab1fd60f42a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWwlMjBJUEQlMjBSZWNlaXB0fGVufDB8fDB8fHww",
        description: "Track and generate receipts for payments made by in-patients."
      },
      {
        title: "IPD Bill ",
        image: "https://images.unsplash.com/photo-1573922423609-081d60747c48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvc3BpdGFsJTIwSVBEJTIwUmVjZWlwdHxlbnwwfHwwfHx8MA%3D%3D",
        description: "Generate final or interim bills for admitted patients.",
        description1: "Includes stay charges, services, medicines, etc."
      },
      {
        title: "Discharge",
        image: "https://images.unsplash.com/photo-1581056771392-8a90ddb76831?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWwlMjBEaXNjaGFyZ2V8ZW58MHx8MHx8fDA%3D",
        description: "Discharge patient with complete summary.",
        description1: "Automatically calculates total stay and charges."
      },
      {
        title: "Patient Register ",
        image: "https://plus.unsplash.com/premium_photo-1726862795125-4f9b8dd8831a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWwlMjBQYXRpZW50JTIwUmVnaXN0ZXJ8ZW58MHx8MHx8fDA%3D",
        description: "Centralized register of all patients – OPD & IPD",
        description1: "Quick search by name, date, doctor, or ID."
      },
      {
        title: "Bed Allotment",
        image: "https://images.unsplash.com/photo-1749087869560-1f00fe44b58e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWwlMjBCZWQlMjBBbGxvdG1lbnQlMjAlM0F8ZW58MHx8MHx8fDA%3D",
        description: "Assign available beds to new patients with status tracking"
      },
      {
        title: "Bed Occupancy",
        image: "https://plus.unsplash.com/premium_photo-1664476831263-b0dfa1e270a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvc3BpdGFsJTIwQmVkJTIwQWxsb3RtZW50JTIwJTNBfGVufDB8fDB8fHww",
        description: "View reports on bed usage – available, reserved, or occupied."
      },
      {
        title: "OPD Register",
        image: "https://images.unsplash.com/photo-1606318313647-137d1f3b4d3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWwlMjBPUEQlMjBSZWdpc3RlciUyMCUzQXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Detailed register of all outpatient visits and billing"

      },
      {
        title: "IPD Collection",
        image: "https://images.unsplash.com/photo-1742934027594-876ca3626df4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvc3BpdGFsJTIwT1BEJTIwUmVnaXN0ZXIlMjAlM0F8ZW58MHx8MHx8fDA%3D",
        description: "Track all collections related to IPD patients."

      },
      {
        title: "Rental Doctor Remuneration",
        image: "https://plus.unsplash.com/premium_photo-1661328213003-c77d9ba01131?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvc3BpdGFsJTIwT1BEJTIwUmVnaXN0ZXIlMjAlM0F8ZW58MHx8MHx8fDA%3D",
        description: "Calculate and manage payments to visiting or rental doctors based on patient count or fixed fee."
      },
      {
        title: "IPD Package",
        image: "https://plus.unsplash.com/premium_photo-1764687908039-0da3fcc723b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWwlMjBJUEQlMjBQYWNrYWdlfGVufDB8fDB8fHww",
        description: "Manage fixed-price treatment packages for IPD services."

      },
      {
        title: "Profit and Loss Account",
        image: "https://plus.unsplash.com/premium_photo-1661284946633-0bf80b5d0a9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWwlMjBQcm9maXQlMjBhbmQlMjBMb3NzJTIwQWNjb3VudHxlbnwwfHwwfHx8MA%3D%3D",
        description: "View income and expenses of hospital operations directly in Tally"
      },
      {
        title: "Balance Sheet",
        image: "https://images.unsplash.com/photo-1710503913397-df9bfea7e50b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWwlMjBQcm9maXQlMjBhbmQlMjBMb3NzJTIwQWNjb3VudHxlbnwwfHwwfHx8MA%3D%3D",
        description: "Monitor hospital’s financial health and assets in real time."
      },


    ]
  },
  {
    id: "auto_email",
    title: "Auto Email",
    banner: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    subtitle: "Automate your email communications with Tally.",
    features: [

      {
        title: "Automatic PDF Email Sending",

        image:
          "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg",

        description:
          "Automatically send invoices, statements, confirmations, and reports as secure PDF attachments directly from Tally.",
      },

      {
        title: "Ledger & Outstanding Sharing",

        image:
          "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",

        description:
          "Send ledger details, outstanding balances, and account confirmations party-wise through email instantly.",
      },

      {
        title: "Invoice Email Tracking",

        image:
          "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",

        description:
          "Track whether invoices or vouchers were emailed using Daybook, Sales Register, or Party Ledger status indicators.",
      },

      {
        title: "Bulk Voucher Emailing",

        image:
          "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",

        description:
          "Send multiple invoices and vouchers together in a single batch with print and export support.",
      },

      {
        title: "Multi Export Options",

        image:
          "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

        description:
          "Supports PDF, Excel, XML export and printing along with simultaneous email sending for faster workflow.",
      },

      {
        title: "Bulk Update Contact Details",

        image:
          "https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg",

        description:
          "Update ledger email IDs, birthdays, anniversaries, and contact details in bulk without manual editing.",
      },

      {
        title: "Selected Ledger Statement Mailing",

        image:
          "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg",

        description:
          "Email one or multiple selected ledger statements with complete transaction history and balances.",
      },

      {
        title: "Outstanding & Confirmation Reports",

        image:
          "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

        description:
          "Send outstanding reports with account confirmations for reconciliations, follow-ups, and audit purposes.",
      },

      {
        title: "Automatic CC Email Feature",

        image:
          "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",

        description:
          "Automatically add admin or company email IDs in CC for every outgoing mail to maintain internal communication records.",
      },

      {
        title: "Birthday & Anniversary Greetings",

        image:
          "https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg",

        description:
          "Automatically send personalized birthday and anniversary greeting emails to clients and business parties.",
      },

      {
        title: "Secure & Error-Free Communication",

        image:
          "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",

        description:
          "Ensures professional, secure, and organized business communication directly from Tally Prime.",
      },

    ],
  },
  {
    id: "petrol_pump",
    title: "Petrol Pump",
    banner: "",
    subtitle:"",
    features: [

      {
        title: "Daily Fuel Rate Updates",

        image:
          "https://images.pexels.com/photos/248539/pexels-photo-248539.jpeg",

        description:
          "Update petrol and diesel prices daily as per market rates, company policies, or government regulations with automatic billing updates.",
      },

      {
        title: "Multiple Tanks & Nozzles Support",

        image:
          "https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg",

        description:
          "Manage multiple fuel tanks and dispensing nozzles with accurate stock tracking, fuel monitoring, and nozzle mapping.",
      },

      {
        title: "Credit Party Vehicle Management",

        image:
          "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg",

        description:
          "Store and manage multiple vehicles under one customer account with vehicle-wise fuel consumption and credit tracking.",
      },

      {
        title: "Multi Cashier & Salesperson Management",

        image:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",

        description:
          "Assign multiple cashiers or salespersons to different nozzles and shifts with complete performance and transaction monitoring.",
      },

      {
        title: "Cashier Wise Payment Tracking",

        image:
          "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",

        description:
          "Track cashier-wise cash sales, UPI payments, and credit transactions for accurate reconciliation and accounting.",
      },

      {
        title: "Nozzle Wise Sales Tracking",

        image:
          "data:image/jpeg;base64,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",

        description:
          "Monitor fuel dispensing and sales nozzle-wise for transparency, performance analysis, and discrepancy detection.",
      },

      {
        title: "Cashier Summary Reports",

        image:
          "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",

        description:
          "Generate cashier-wise summary reports including meter readings, cash collection, fuel sales, receivables, and shortages.",
      },

      {
        title: "Manager Summary Dashboard",

        image:
          "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

        description:
          "View consolidated reports across all nozzles, cashiers, sales, shortages, and operational activities for management decisions.",
      },

      {
        title: "Ledger Bill Summary for Credit Parties",

        image:
          "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

        description:
          "Generate weekly or monthly bills for credit customers with detailed vehicle-wise fuel transaction reports.",
      },

      {
        title: "Meter Reading Reports",

        image:
          "data:image/jpeg;base64,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",

        description:
          "Capture and maintain nozzle meter readings to ensure accurate fuel dispensing, stock auditing, and theft detection.",
      },

      {
        title: "Tank Wise & Nozzle Wise Reports",

        image:
          "https://images.pexels.com/photos/248539/pexels-photo-248539.jpeg",

        description:
          "Generate tank-wise and nozzle-wise fuel reports showing stock levels, fuel issued, and remaining inventory in real-time.",
      },

      {
        title: "Daily Summary Reports",

        image:
          "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",

        description:
          "Get complete day-end summaries including sales, inventory status, cash collection, tank performance, and reconciliation reports.",
      },

      {
        title: "Tally Integration",

        image:
          "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg",

        description:
          "Automatically integrate daily petrol pump transactions and reports directly into Tally for accurate accounting and bookkeeping.",
      },

    ],


  },
  {
    id: "broker_salesman",
    title: "Broker Salesman",
    banner: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    features: [

      {
        title: "Salesman Wise Commission Setup",

        image:
          "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

        description:
          "Set different commission percentages for each salesman based on their individual sales performance and business requirements.",
      },

      {
        title: "Stock Item Wise Commission",

        image:
          "https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg",

        description:
          "Configure commission based on products, product groups, or item categories for accurate and flexible commission management.",
      },

      {
        title: "Commission by Quantity or Amount",

        image:
          "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",

        description:
          "Calculate commissions either based on quantity sold or total sales amount to suit different sales strategies and policies.",
      },

      {
        title: "Salesman Commission Report",

        image:
          "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",

        description:
          "Generate detailed salesman commission reports showing earned commissions, sales performance, and payment calculations.",
      },

      {
        title: "Monthly Party Wise Commission Report",

        image:
          "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

        description:
          "View monthly commission reports linked with both customers and salesmen for better business analysis and tracking.",
      },

      {
        title: "Stock Item Wise Sales Analysis",

        image:
          "https://images.pexels.com/photos/7947758/pexels-photo-7947758.jpeg",

        description:
          "Analyze which products are selling the most and identify the salesmen responsible for higher product sales performance.",
      },

      {
        title: "Salesman Wise Outstanding Tracking",

        image:
          "https://images.pexels.com/photos/4386371/pexels-photo-4386371.jpeg",

        description:
          "Track pending payments, dues, and outstanding balances related to each salesman for better financial monitoring.",
      },

    ],

  },
  {
    id: "apmc_ada",
    title: "APMC ADA",
    banner: "https://media.istockphoto.com/id/1410323459/photo/portrait-of-a-businessman-working-on-a-tablet-computer-in-a-modern-office-make-an-account.jpg?s=612x612&w=0&k=20&c=w1Ueuo3x8oeyq2yXdTVpjF8F1fZmGsYtemJfhrGJPGY=",
    features: [

      {
        title: "Multi Farmer Purchase Entry",

        image:
          "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg",

        description:
          "Create purchase entries for multiple farmers in a single voucher with farmer details, quantity, bags, weight, rate, and automatic total calculations.",
      },

      {
        title: "Bags & Weight Based Purchase",

        image:
          "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg",

        description:
          "Supports dual units like Bags and Kilograms with automatic unit conversion and quantity-wise or weight-wise rate calculations.",
      },

      {
        title: "Farmer Patti Generation",

        image:
          "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

        description:
          "Automatically generate farmer patti with gross amount, deductions, commission, market fees, and final payable amount in print-ready format.",
      },

      {
        title: "Commission Calculation",

        image:
          "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",

        description:
          "Calculate commission automatically based on percentage, per bag, per kilogram, or product-wise commission structures.",
      },

      {
        title: "Buyer & Seller Expense Management",

        image:
          "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",

        description:
          "Manage buyer and seller expenses like transport, market fee, hamali, weighment, and packaging with automatic expense distribution.",
      },

      {
        title: "Cuttings & Deductions Handling",

        image:
          "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",

        description:
          "Handle deductions such as weight cutting, commission cutting, packing charges, and rate adjustments product-wise.",
      },

      {
        title: "Automatic Journal Posting",

        image:
          "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg",

        description:
          "Automatically generate accounting journal entries for farmer payable, commission income, and buyer/seller expenses.",
      },

      {
        title: "Ledger Auto Creation & Mapping",

        image:
          "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

        description:
          "Automatically create and map ledgers for farmers, buyers, and expenses with proper accounting group allocation.",
      },

      {
        title: "Farmer Wise Reports",

        image:
          "https://images.pexels.com/photos/7947758/pexels-photo-7947758.jpeg",

        description:
          "Generate farmer-wise reports showing quantity sold, rate, deductions, payable amount, and filters by village, product, or date.",
      },

      {
        title: "Buyer Wise Reports",

        image:
          "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",

        description:
          "View buyer-wise reports including purchased products, total amount, expenses paid, and date or item-wise analysis.",
      },

      {
        title: "Buyer Expense Reports",

        image:
          "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",

        description:
          "Track buyer-wise and date-wise expense details including commission, gross amount, and net payable analysis.",
      },

      {
        title: "Item Wise Product Reports",

        image:
          "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",

        description:
          "Generate product-wise quantity and amount summaries along with supplier and farmer details for better inventory analysis.",
      },

    ],

  },
  {
    id: "fruit_adat",
    title: "Fruit ADAT",
    banner: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
    features: [

      {
        title: "Multi Farmer Fruit Purchase Entry",

        image:
          "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg",

        description:
          "Add multiple fruit farmers in a single purchase entry with farmer-wise item details, bags, weight, rates, and gross amount calculations.",
      },

      {
        title: "Perishable Entry Tracking",

        image:
          "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg",

        description:
          "Track fruit arrivals with quality grades, arrival dates, freshness details, and perishable inventory management.",
      },

      {
        title: "Automatic Total Calculations",

        image:
          "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

        description:
          "Automatically calculate total bags, total weight, and total gross amount for accurate purchase management.",
      },

      {
        title: "Mixed Unit Handling",

        image:
          "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",

        description:
          "Supports mixed units like Bags, Crates, Kilograms, and Quintals with configurable item-wise unit conversion.",
      },

      {
        title: "Weight & Crate Wise Rate Entry",

        image:
          "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",

        description:
          "Enter rates based on weight or crate quantity for flexible fruit purchase and pricing operations.",
      },

      {
        title: "Auto Farmer Patti Generation",

        image:
          "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",

        description:
          "Generate farmer patti automatically with farmer details, fruit items, deductions, net payable amount, and printable business format.",
      },

      {
        title: "Commission Calculation",

        image:
          "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",

        description:
          "Calculate commissions based on flat percentage, per kilogram, per crate, or fruit-type-wise commission structures.",
      },

      {
        title: "Commission Ledger Integration",

        image:
          "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",

        description:
          "Automatically link commission calculations with commission income ledger entries for smooth accounting management.",
      },

      {
        title: "Cuttings & Deduction Management",

        image:
          "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg",

        description:
          "Manage deductions like commission, weighment charges, packing recovery, and market waste deductions automatically.",
      },

      {
        title: "Packing & Weighment Charges",

        image:
          "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg",

        description:
          "Track packing material charges, weighing costs, and additional operational expenses accurately during settlement.",
      },

      {
        title: "Farmer Settlement Reports",

        image:
          "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

        description:
          "Generate farmer-wise settlement reports with gross amount, deductions, commission, and net payable summaries.",
      },

      {
        title: "Fruit Wise Analysis Reports",

        image:
          "https://images.pexels.com/photos/7947758/pexels-photo-7947758.jpeg",

        description:
          "Analyze fruit-wise purchase quantity, rates, farmer supply details, and overall business performance with smart reporting.",
      },

    ],

  }, {
    id: "advanced_security",
    title: "Advanced Security",
    banner:
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",

    features: [

      {
        title: "Userwise Voucher Type Security",

        image:
          "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

        description:
          "Allow or restrict users from accessing specific voucher types like Sales, Purchase, Payment, and Receipt for secure transaction management.",
      },

      {
        title: "Negative Stock Control",

        image:
          "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg",

        description:
          "Prevent users from creating invoices when stock is unavailable, ensuring accurate inventory management and avoiding over-selling.",
      },

      {
        title: "Godown & Location Wise Access",

        image:
          "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg",

        description:
          "Assign users to specific godowns or warehouse locations and restrict access to authorized stock and inventory only.",
      },

      {
        title: "Userwise Ledger Security",

        image:
          "https://images.pexels.com/photos/4386371/pexels-photo-4386371.jpeg",

        description:
          "Hide or restrict confidential ledgers like Salary, Expenses, Revenue, and Accounts from unauthorized users for better financial security.",
      },

      {
        title: "Userwise Cutoff Date Control",

        image:
          "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",

        description:
          "Set cutoff dates to prevent users from creating, modifying, or deleting entries before finalized accounting periods.",
      },

      {
        title: "Secure Transaction Monitoring",

        image:
          "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",

        description:
          "Monitor user activities and restrict unauthorized financial operations for safer accounting and audit management.",
      },

      {
        title: "Role Based User Permissions",

        image:
          "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

        description:
          "Create customized access permissions for accountants, managers, operators, and admins based on their responsibilities.",
      },

      {
        title: "Data Protection & Access Control",

        image:
          "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",

        description:
          "Protect sensitive accounting and inventory data with advanced user-level access restrictions and security configurations.",
      },

    ],

  },

  {
    id: "email_otp",
    title: "Email-Based OTP Login",
    banner: "https://media.istockphoto.com/id/1830134328/photo/businesswoman-login-to-the-network-by-username-and-password-on-the-virtual-screen-while.jpg?s=612x612&w=0&k=20&c=eatUvWzYnUGxJH0FH_XVNccok963hNRtSHv9lsjYUik=",

    features: [
      {
        title: "Email-Based OTP Login",
        image: "https://media.istockphoto.com/id/1985229015/photo/two-steps-authentication-concept-otp-code-showing-on-phone-screen-for-log-in-on-web-on-laptop.jpg?s=612x612&w=0&k=20&c=j9BeMJ0qrxSCpkNr6jB7gGoFzZFDCrQN-1DtDyfB7-c=",
        description: "Every time admin tries to log in, an OTP (One-Time Password) is sent to their email.Tally will open only after entering the correct OTP.",

      },
      {
        title: "Extra Security for Admin Access",
        image: "https://plus.unsplash.com/premium_photo-1764705653658-7e6649bc015e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzk1fHxFeHRyYSUyMFNlY3VyaXR5JTIwZm9yJTIwQWRtaW4lMjBBY2Nlc3N8ZW58MHx8MHx8fDA%3D",
        description: "Prevents unauthorized users from opening Tally.Ideal for offices with shared computers or remote access.",

      },
      {
        title: "Custom Email Settings",
        image: "https://plus.unsplash.com/premium_photo-1661375025352-d5a4d633999b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VzdG9tJTIwRW1haWwlMjBTZXR0aW5nc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "OTP is sent from your own email ID (you can set this).",


      },
      {
        title: "OTP Expiry Time",
        image: "https://images.unsplash.com/photo-1604419254059-8b62131c8c59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE9UUCUyMEV4cGlyeSUyMFRpbWV8ZW58MHx8MHx8fDA%3D",
        description: "Each OTP is valid only for a limited time (e.g., 5 minutes).After expiry, a fresh OTP is needed.",

      },
      {
        title: "Alert on Wrong OTP",
        image: "https://media.istockphoto.com/id/2177980865/photo/system-warning-hacked-alert-cyberattack-on-smartphone-programmer-businessman-staff-developer.webp?a=1&b=1&s=612x612&w=0&k=20&c=K6z9dPvxK0F1eZN1h9P5_cQJUqz0FCSNmrD3tVn9jVY=",
        description: "If someone tries to enter the wrong OTP multiple times, an alert email is sent to the admin.Helps track unauthorized login attempts.",

      },
      {
        title: "Fully Compatible with Tally Prime",
        image: "https://media.istockphoto.com/id/1269998545/photo/documents-waiting-to-read-by-barcode-reader.jpg?s=612x612&w=0&k=20&c=BVsMX-qzkqVibvb6giy_SfZ7slD-W_LbVhP_ahdrxDQ=",
        description: "Doesn’t affect your regular Tally work.Runs smoothly in the background without slowing down the system.",

      },
    ]


  },
  {
    id: "warranty_amc",
    title: "Warranty & AMC",
    banner: "https://media.istockphoto.com/id/2202847872/photo/in-this-business-management-concept-a-businessman-erases-a-white-arrow-and-draws-a-yellow.jpg?s=612x612&w=0&k=20&c=VsrUk7MqH5mSwfhhYibYP7Cpjq7P_VAs3u3zMPXejsA=",
   subtitle:"",
    features: [
      {
        title: "Warranty Tracking",
        image: "https://plus.unsplash.com/premium_photo-1681433394443-f00c5d39087e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V2FycmFudHklMjBUcmFja2luZ3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Track product-wise warranty periods (start & end date) for each customer.",

      },

      {
        title: "AMC Contract Management",
        image: "https://plus.unsplash.com/premium_photo-1723874476102-de001b6688ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QU1DJTIwQ29udHJhY3QlMjBNYW5hZ2VtZW50fGVufDB8fDB8fHww",
        description: "Maintain AMC records with contract start/end dates, service terms, and renewal reminders.",

      },
      {
        title: "Auto Alerts & Notifications",
        image: "https://media.istockphoto.com/id/1497616582/photo/hand-using-smartphone-with-showing-the-bell-icon-and-notifications-of-new-messages-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=WhstWHQTOtL2GsyU29qLfGq3VkZtOqKETeEWCCATfnY=",
        description: " Get automated alerts for warranty expirations or AMC renewals (via pop-up, print, or email).",

      },
      {
        title: "Customer-wise Service History",
        image: "https://media.istockphoto.com/id/638222094/photo/man-holding-a-tablet-showing-customer-service-concept.jpg?s=612x612&w=0&k=20&c=sTqc0WAqmyV9sqSzBSHeMAlYBjR03U1KGiQG2w2-XSc=",
        description: " View complete service records, complaints, and visits for each customer/product.",

      },
      {
        title: "Product Serial Number Mapping",
        image: "https://media.istockphoto.com/id/520409274/photo/partial-product-code.jpg?s=612x612&w=0&k=20&c=Jr96V8SbXne7PXjxdYcW4W6SCdI1L7g39j3522EBvmI=",
        description: " Link each sold product with a unique serial number for warranty/AMC verification.",

      },
      {
        title: "Invoice Linkage",
        image: "https://media.istockphoto.com/id/1037577382/photo/invoice-in-envelope-with-pen-and-glasses-document-is-mock-up.jpg?s=612x612&w=0&k=20&c=fPHFdC7_eWgqDlmRvIHNCPves0qmb0ytMyQUKHzcj2o=",
        description: " Automatically link warranty/AMC to specific invoices for easier tracking and validationLink each sold product with a unique serial number for warranty/AMC verification.",

      },
      {
        title: "Report Generation",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fFJlcG9ydCUyMEdlbmVyYXRpb258ZW58MHx8MHx8fDA%3D",
        description: "Generate reports like: Warranty Expiry List, AMC Due List,Product-wise AMC Status",

      },
      {
        title: "Renewal Management",
        image: "https://media.istockphoto.com/id/1144570336/photo/change-management-in-organization-and-business-concept-with-consultant-presenting-icons-of.jpg?s=612x612&w=0&k=20&c=jWzl7sIxO2gmE37euLh0Eih8bpKhhDM8FP8Wh0_yae8=",
        description: "Enable easy creation of AMC renewal entries with reminders and past contract details",

      },
    ]
  },
  {
    id: "api_integration",
    title: "Other Software integration With Tally Via API",
    banner: "https://media.istockphoto.com/id/2168215145/photo/businessman-using-kpi-dashboard-management-data-system-kpi-connected-in-database-for-follow.jpg?s=612x612&w=0&k=20&c=kUNncAVVzQEGnoEkAk0RZpfawjgH1tDx6gbIJ7St-cs=",
    subtitle:"",
    features: [
      {
        title: "CRM Integration",
        image: "https://media.istockphoto.com/id/1361510800/photo/use-a-document-management-system-an-online-documentation-database-to-correctly-manage-files.webp?a=1&b=1&s=612x612&w=0&k=20&c=8svRN8p7yhgBrEKPBBl6zDBRjF1vOQhFHzOw_CDSkPA=",
        description: "Automatically sync customer data, sales orders, and payments from CRM to Tally.",

      },
      {
        title: "ERP Integration",
        image: "https://media.istockphoto.com/id/1368145760/photo/businessman-using-a-computer-to-enterprise-resource-management-erp-software-system-for.jpg?s=612x612&w=0&k=20&c=EdpyXj1suyhtIkaPql2I4qGv8yNPeoMGW_Duwlw1U5k=",
        description: "Connect ERP systems to transfer vouchers, inventory, and invoices",

      },
      {
        title: "E-commerce Platforms",
        image: "https://media.istockphoto.com/id/2268078057/photo/digital-marketers-manage-e-commerce-growth-using-online-shopping-technology-advertising.jpg?s=612x612&w=0&k=20&c=ana9JJXFo0RIcAAJ5ksrzN_0mb6-POp1t5KHz9aDvJw=",
        description: "Auto-post orders, payments, and customer details from platforms like Shopify, WooCommerce,or Amazon into Tally.",

      },
      {
        title: "Billing & POS Software",
        image: "https://images.unsplash.com/photo-1647427017067-8f33ccbae493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmlsbGluZyUyMCUyNiUyMFBPUyUyMFNvZnR3YXJlfGVufDB8fDB8fHww",
        description: "Sync sales bills, tax details, and payment entries from POS/billing software directly into Tally.",

      },
      {
        title: "Payroll Software",
        image: "https://media.istockphoto.com/id/2246330788/photo/financial-analyst-using-payroll-software.jpg?s=612x612&w=0&k=20&c=syWW24wdhbOdV3f45SPxOiV42GQUweY9mERA3Khg1Vs=",
        description: "Integrate salary data, employee ledger entries, and TDS records into Tally from HR or payroll tools.",

      },
      {
        title: "Inventory Management Tools",
        image: "https://images.unsplash.com/photo-1648824572347-517357c9c44e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW52ZW50b3J5JTIwTWFuYWdlbWVudCUyMFRvb2xzfGVufDB8fDB8fHww",
        description: " Update stock levels, item masters, and stock transfers into Tally from warehouse or inventory software.",

      },
      {
        title: "Mobile Applications",
        image: "https://plus.unsplash.com/premium_photo-1661410847282-d6af31c576a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwYXBwbGljYXRpb258ZW58MHx8MHx8fDA%3D",
        description: " Push mobile app-generated sales, attendance, or expense data directly into Tally in real-time.",

      },
      {
        title: "Custom Software Integration",
        image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q3VzdG9tJTIwU29mdHdhcmUlMjBJbnRlZ3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        description: "Use API to connect any custom-developed application (desktop/web/mobile) for bi-directional Tally data sync.",

      },

    ]
  },
  {
    id: "multi_settlement",
    title: "Multi-Settlement With Auto Receipt",
    banner: "https://media.istockphoto.com/id/2263538191/photo/close-up-of-receipt-printing-from-payment-terminal.jpg?s=612x612&w=0&k=20&c=8NB5q8bKoqkBMdPACp2qYsgOcNNdPwPcDCZP7h5JFE8=",
    subtitle: "",
    features: [
      {
        title: "Sales + Auto Receipt = One Step",
        image: "https://plus.unsplash.com/premium_photo-1678139620956-cbd87b6ba3d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlsbHN8ZW58MHx8MHx8fDA%3D",
        description: "You can create a sales invoice and receive payment in the same entry.",

      },
      {
        title: "Multi Settlement During Sales",
        image: "https://plus.unsplash.com/premium_photo-1661274094309-47d0a2dc80b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TXVsdGklMjBTZXR0bGVtZW50JTIwRHVyaW5nJTIwU2FsZXN8ZW58MHx8MHx8fDA%3D",
        description: "System allows selecting previous outstanding bills and settling them automatically during Sales entry.",

      },
      {
        title: "Supports All Payment Modes",
        image: "https://plus.unsplash.com/premium_photo-1665203428051-b7cbaa73d8d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFN1cHBvcnRzJTIwQWxsJTIwUGF5bWVudCUyME1vZGVzfGVufDB8fDB8fHww",
        description: "Accept payment via Cash, Bank, Cheque, UPI, NEFT, etc. at the time of sale.",

      },
      {
        title: "No Need to Open Receipt Voucher Separately",
        image: "https://images.unsplash.com/photo-1593871097805-09627f52f4bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fE5vJTIwTmVlZCUyMHRvJTIwT3BlbiUyMFJlY2VpcHQlMjBWb3VjaGVyJTIwU2VwYXJhdGVseXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Auto receipt voucher is created in the background when you save the sales entry",

      },
      {
        title: "Payment Adjustment from Sales Screen",
        image: "https://media.istockphoto.com/id/2208943527/photo/couple-using-tablet-and-credit-card-to-shop-online-through-e-commerce-app-making-payment-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=sWVWmV70Tm3dJgM9MfRkPMeFCts5t8Tuhy-eCYblWRs=",
        description: "Easily select which past bills to settle using the payment being received.",

      },
      {
        title: "Handles Full or Partial Payment",
        image: "https://media.istockphoto.com/id/2266999342/photo/mobile-contactless-payment-with-smartphone-at-grocery-checkout-counter-using-card-reader.jpg?s=612x612&w=0&k=20&c=Y6TmfgPx-RtMcGGcs6y7fidY4BvLHKqw7Bnl6Y4bglI=",
        description: "Even if only part of the amount is received, it will adjust it against multiple invoices as per rules",

      },
      {
        title: "Party Outstanding Screen Pop-up",
        image: "https://media.istockphoto.com/id/1386899314/photo/man-holding-on-an-invoice-note-receipt-financial.jpg?s=612x612&w=0&k=20&c=8XbMKgpY5GnLHzv8D8GqxU-gaYVT6aZU_nwo_ubyLho=",
        description: "When payment is entered during sale, the system shows outstanding bills of the customer for easy selection.",

      },
      {
        title: "Perfect for Counter Sales or Regular Customers",
        image: "https://media.istockphoto.com/id/1484825666/photo/tracking-and-analyzing-competitor-data-drive-business-growth-effectively-business-leader-team.jpg?s=612x612&w=0&k=20&c=9Q5L50yhTdDz0BvxxU_fqfMKR-gIVPcX-PANlB8lJoY=",
        description: "Great for businesses where sales and payment happen together (retail counters, B2B sales, etc.)",

      },
    ]
  },
  {
    id: "jewellary_module",
    title: " Jewellery",
    banner: "https://images.unsplash.com/photo-1647312281540-47455957ee2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGpld2VsbGFyeV9tb2R1bGV8ZW58MHx8MHx8fDA%3D",
  subtitle:"",
    features: [
      {
        title: "Gold/Silver Sales & Purchase",
        image: "https://plus.unsplash.com/premium_photo-1681276168422-ebd2d7e95340?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGpld2VsbGFyeV9tb2R1bGV8ZW58MHx8MHx8fDA%3D",
        description: "Used to record buying and selling of gold and silver items.",
        description1: "Captures details like item weight, purity (carat), rate per gram, and total value.",
        description2: "Helps maintain accurate stock and accounts for precious metals."
      },
      {
        title: "HUID Management",
        image: "https://images.unsplash.com/photo-1680789526879-944b2b74b84a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGpld2VsbGFyeV9tb2R1bGV8ZW58MHx8MHx8fDA%3D",
        description: "HUID means Hallmark Unique Identification Number for gold jewellery.",
        description1: "This feature stores and tracks HUID numbers for each item.",
        description2: "Ensures legal compliance and traceability of every gold piece."
      },
      {
        title: ".Multiple Payment Options at Sales",
        image: "https://images.unsplash.com/photo-1581522722022-802dd1ba55ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGpld2VsbGFyeV9tb2R1bGV8ZW58MHx8MHx8fDA%3D",
        description: "Makes the billing process smooth and flexible",
        description1: "Allows customer to pay using different methods in one bill (Cash, UPI, Card, Cheque, Old Gold).",
        description3: "Helps in recording all types of payments properly."
      },
      {
        title: "HUID Wise Barcode/QR Code Module",
        image: "https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amV3ZWxsYXJ5X21vZHVsZXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Generates barcode or QR code for each jewellery item using HUID.",
        description1: "When scanned, it shows item details – weight, purity, rate, and HUID.",
        description2: "Increases speed and accuracy in billing and inventory."
      },
      {
        title: ".Provision to Add Making Charges per Gram",
        image: "https://images.unsplash.com/photo-1611170947204-5ab96c3e37a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amV3ZWxsYXJ5X21vZHVsZXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Adds making charges based on the weight of the jewellery item.",
        description1: "Making charges are the labour cost of crafting the item.",
        description2: "Final amount is calculated automatically during billing."
      },
      {
        title: "Provision to Add URD Purchase While Sales",
        image: "https://images.unsplash.com/photo-1759651038234-7b46fce068ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGpld2VsbGFyeV9tb2R1bGV8ZW58MHx8MHx8fDA%3D",
        description: "URD means Unregistered Dealer (like old gold without bill).",
        description1: "This feature lets you accept old gold from customers and adjust its value in the bill.",
        description2: "Useful when customer exchanges old jewellery while buying new."
      },
      {
        title: "HUID Wise In/Out Register",
        image: "https://plus.unsplash.com/premium_photo-1674748385662-5594beffea9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGpld2VsbGFyeV9tb2R1bGV8ZW58MHx8MHx8fDA%3D",
        description: "Helps in tracking item movement in the shop.",
        description1: "Ensures full control, transparency, and stock accuracy"
      },


    ]
  },
  {
    id: "share_market",
    title: " Share Market ",
    banner: "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U0hBUkUlMjBNQVJLRVQlMjBNT0RVTEV8ZW58MHx8MHx8fDA%3D",
   subtitle:"",
    features: [
      {
        title: "Share Accounting Management",
        image: "https://images.unsplash.com/photo-1651341050677-24dba59ce0fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U0hBUkUlMjBNQVJLRVQlMjBNT0RVTEV8ZW58MHx8MHx8fDA%3D",
        description: " Record buying, selling, and holding of shares directly in Tally.",
        description1: "Works like regular business vouchers for easy investment management."
      },
      {
        title: "Automatic Gain/Loss Calculation",
        image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNIQVJFJTIwTUFSS0VUJTIwTU9EVUxFfGVufDB8fDB8fHww",
        description: " Calculates gains or losses from share trades automatically.",
        description1: " Reduces manual calculations and accounting errors."
      },
      {
        title: "Capital Gain Reports",
        image: "https://images.unsplash.com/photo-1734503937317-3b88a42ac50c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fFNIQVJFJTIwTUFSS0VUJTIwTU9EVUxFfGVufDB8fDB8fHww",
        description: " Provides reports for short-term and long-term capital gains/losses.",
        description1: "Helps users track investment performance clearly."
      },
      {
        title: "Share Performance Monitoring",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hhcmUlMjBQZXJmb3JtYW5jZSUyME1vbml0b3Jpbmd8ZW58MHx8MHx8fDA%3D",
        description: "Monitor how each share is performing over time.",
        description1: " Gives better visibility into investment growth."
      },
      {
        title: " Individual Share-Wise Profit/Loss",
        image: "https://images.unsplash.com/photo-1772413438617-937e44f2642e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SW5kaXZpZHVhbCUyMFNoYXJlLVdpc2UlMjBQcm9maXQlMkZMb3NzfGVufDB8fDB8fHww",
        description: "Shows profit or loss for each individual share.",
        description1: " Automatically identifies short-term and long-term gains/losses."
      },
      {
        title: "Tax & Audit Support",
        image: "https://images.unsplash.com/photo-1709880945165-d2208c6ad2ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGF4JTIwJTI2JTIwQXVkaXQlMjBTdXBwb3J0fGVufDB8fDB8fHww",
        description: " Makes tax return preparation easier with separated gain reports.",
        description1: "Useful during audits and financial reporting.",

      },
      {
        title: "Automatic Profit & Loss Entries",
        image: "https://images.unsplash.com/photo-1709534486708-fb8f94150d0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXV0b21hdGljJTIwUHJvZml0JTIwJTI2JTIwTG9zcyUyMEVudHJpZXN8ZW58MHx8MHx8fDA%3D",
        description: "Automatically books Profit & Loss entries.",
        description1: "Eliminates the need for manual voucher posting.",

      },
      {
        title: "Accurate Voucher Creation",
        image: "https://images.unsplash.com/photo-1631557776874-e39db672b62d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEFjY3VyYXRlJTIwVm91Y2hlciUyMENyZWF0aW9ufGVufDB8fDB8fHww",
        description: "Uses buying and selling prices to calculate exact gains/losses.",
        description1: "Creates correct accounting entries automatically."
      },
      {
        title: "Reduced Posting Mistakes",
        image: "https://images.unsplash.com/photo-1612342222980-e549ae573834?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVkdWNlZCUyMFBvc3RpbmclMjBNaXN0YWtlc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Automatic entries reduce calculation and posting errors.",
        description1: "Improves accounting accuracy."
      },
      {
        title: "Share-Wise Stock Reports",
        image: "https://media.istockphoto.com/id/171555377/photo/stock-market-data.webp?a=1&b=1&s=612x612&w=0&k=20&c=CcfS9gkBF1DviX1fu65XaAYPt18pHm8zMQq7G6MSs2g=",
        description: "View movement and performance of specific shares.",
        description1: "Track bought, sold, and held quantities easily."
      },
      {
        title: "Detailed Share Movement Tracking",
        image: "https://images.unsplash.com/photo-1580983693000-5654250f64d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RGV0YWlsZWQlMjBTaGFyZSUyME1vdmVtZW50JTIwVHJhY2tpbmd8ZW58MHx8MHx8fDA%3D",
        description: " Shows entry date, quantity, and current position of shares.",
        description1: " Helps maintain complete investment history."
      },
      {
        title: "Combined Share Reports",
        image: "https://images.unsplash.com/photo-1651341050677-24dba59ce0fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29tYmluZWQlMjBTaGFyZSUyMFJlcG9ydHN8ZW58MHx8MHx8fDA%3D",
        description: "Generate combined reports of all shares in one place.",
        description1: "Simplifies portfolio analysis and review."
      }
    ]
  },
  {
    id: "doc_link",
    title: "Document Linking System in tally Prime Using DLL",
    banner: "https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fERvY3VtZW50JTIwTGlua2luZyUyMFN5c3RlbSUyMGluJTIwdGFsbHklMjBQcmltZSUyMFVzaW5nJTIwRExMfGVufDB8fDB8fHww",
    subtitle:"",
    features: [
      {
        title: "Share Accounting Management",
        image: "https://media.istockphoto.com/id/1633896180/photo/analyst-working-with-computer-in-business-analytics-and-data-management-system-with-kpi-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=DNXAiFWd78dHc0rLoLAcb2lN4XHvazSzTn0shQh8BqI=",
        description: " A Document Linking System allows users to link external files/documents (PDFs, images, Excel, etc.) to transactions or masters in Tally Prime. When implemented via a DLL, it adds enhanced functionality beyond standard TDL capabilities,including file system access and automation. TDL alone cannot perform file browsing, directory access, or launching documents.",

      },
      {
        title: "It enables advanced actions like:",
        image: "https://media.istockphoto.com/id/2207431187/photo/document-management-system-dms-enterprise-resource-planning-erp-document-workflow-sharing.jpg?s=612x612&w=0&k=20&c=0hiHytqii_NtyolGJJNg8rVIhnR6jS3_Ipk1oMSc_FA=",
        description: " Opening file explorer, Attaching files to a voucher, Saving file paths in Tally fields, Opening files directly from Tally",

      },
      {
        title: "Key Functionalities (via DLL Integration)",
        image: "https://media.istockphoto.com/id/537548296/photo/businessman-touch-the-screen-and-select-doc-file.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xsr2L3qvXw6O79P2ci-WoAdUjev5ThsV_EmXS2ApVyc=",
        description: " 1.Attach External Files – Browse and attach files to vouchers or ledgers. 2.Store File Path in Tally – File paths are saved in UDFs (User Defined Fields) in Tally. 3.One-Click File Access – Click a button in Tally to open the linked document via the DLL. 4.Multi-File Support – Link multiple files using a semicolon or list format. 5.Auto-Create Folders – DLL can create folders based on voucher numbers or dates.",

      },
      {
        title: "Benefits of DLL-Based Document Linkin",
        image: "https://media.istockphoto.com/id/2262019196/photo/document-management-and-network-system-concept-businessman-use-smart-tablet-loading-documents.webp?a=1&b=1&s=612x612&w=0&k=20&c=jNlPCvjCpJ61kB5A0iOoAtVKa3HKmtXNKlNEJtPXXac=",
        description: "1.Seamless integration with the Windows file system. 2.Reduces manual effort and paperwork. 3.Quick access to linked documents for audit or reference. 4.Can automate folder structures (e.g., by voucher type, date). 5.Makes Tally more interactive and enterprise-ready.",

      },
    ]
  },
  {
    id: "normal_pos",
    title: "Normal Bill Printing to POS Bill Printing",
    banner: "https://www.pospaper.com/cdn/shop/articles/image_fx__6_1200x1200.png?v=1727709720",
    features: [
      {
        title: "Objective:",
        image: "https://dcodeinternational.com/wp-content/uploads/2025/04/%E6%89%93%E5%8D%B0%E6%9C%BA1.jpg",
        description: " To change the default normal sales invoice into a POS-style bill, with:Compact layout, Auto-print on save (optional), Barcode or QR code (optional), Thermal or small paper support, Fast billing with minimum input.",

      },
      {
        title: "Summary of What You Get:",
        image: "https://cdn.shopify.com/shopifycloud/help-center/manual/sell-in-person/hardware/receipt-printer/zero-ip-address.png",
        description: "Small-sized POS print layout, Faster billing process, Optional auto print, Multiple payment options, Print logo, QR, or barcode, Suitable for petrol pump, retail, grocery.",

      },
    ]

  },
  {
    id: "dairy_integration",
    title: "Dairy Integration with Dairy Software Via API",
    banner: "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg",
    features: [

      {
        title: "Milk Collection Entry",

        image:
          "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg",

        description:
          "Automatically record daily milk collection including quantity, fat, and SNF from farmers and sync data directly with Tally and dairy software.",
      },

      {
        title: "Farmer Ledger Sync",

        image:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",

        description:
          "Maintain real-time farmer account details including milk supply, advances, deductions, and balances seamlessly inside Tally.",
      },

      {
        title: "Rate Chart Integration",

        image:
          "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",

        description:
          "Automatically sync fat and SNF based milk rates from dairy software to calculate farmer payments accurately.",
      },

      {
        title: "Milk Testing Machine Integration",

        image:
          "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",

        description:
          "Fetch milk testing data like Fat and SNF directly from machines such as Lactoscan using API integration.",
      },

      {
        title: "Auto Payment Entry",

        image:
          "https://images.pexels.com/photos/4386398/pexels-photo-4386398.jpeg",

        description:
          "Automatically generate payment entries in Tally after considering deductions, feed costs, loans, and advances.",
      },

      {
        title: "Inventory Management",

        image:
          "data:image/jpeg;base64,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",

        description:
          "Manage feed stock, medicines, dairy products, and inventory movements between dairy software and Tally efficiently.",
      },

      {
        title: "Sales & Purchase Invoice Integration",

        image:
          "https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg",

        description:
          "Automatically create and sync invoices for milk, paneer, curd, and other dairy products directly into Tally.",
      },

      {
        title: "Feed Management",

        image:
          "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",

        description:
          "Track cattle feed distribution, monitor stock levels, and auto-adjust feed costs from farmer payments using API integration.",
      },

    ],

  },
  {
    id: "recycle_bin",
    title: "Recycle Bin Voucher Delete by Passwords",
    banner: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
    features: [

      {
        title: "Background Deletion Monitoring",

        image:
          "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",

        description:
          "Deleted vouchers are safely stored in Tally’s background recycle bin while remaining hidden from normal users for better security and control.",
      },

      {
        title: "User Wise Recycle Bin Access Control",

        image:
          "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",

        description:
          "Allow only authorized users like Admin to access, view, or manage deleted vouchers inside the recycle bin.",
      },

      {
        title: "Password Protection",

        image:
          "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",

        description:
          "Protect recycle bin access with password authentication to prevent accidental or unauthorized viewing of deleted voucher data.",
      },

      {
        title: "Hide Recycle Bin Option",

        image:
          "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",

        description:
          "Hide the ‘Show Recycle Bin’ option from Day Book or voucher screens for restricted staff and billing operators.",
      },

      {
        title: "Restore Permission Lock",

        image:
          "https://images.pexels.com/photos/5380596/pexels-photo-5380596.jpeg",

        description:
          "Users without restore permissions cannot recover deleted vouchers, ensuring complete protection against misuse or tampering.",
      },

      {
        title: "Multi User Security Management",

        image:
          "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

        description:
          "Ideal for businesses with multiple Tally users including garment shops, retail counters, and accounting firms handling sensitive entries.",
      },

    ],

  },
  {
    id: "material_requisition",
    title: "Material Requisition",
    banner: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg",
    features: [

      {
        title: "Create Material Requisition Voucher",

        image:
          "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

        description:
          "Create a dedicated Material Requisition voucher type in Tally to request materials from stores or warehouses just like Purchase or Sales vouchers.",
      },

      {
        title: "Multi Item Requisition Entry",

        image:
          "https://www.investopedia.com/thmb/20nuKChMlKPeW3jGYzQdOcTr4_0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/requisition.asp_final-57e0abfc140942fe925e666f33444c46.png",

        description:
          "Request multiple stock items in a single voucher with quantity and location details to save time and reduce repetitive entries.",
      },

      {
        title: "Date & Department Wise Requisition",

        image:
          "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

        description:
          "Track requisitions department-wise along with request dates for better internal consumption monitoring and accountability.",
      },

      {
        title: "Pending Requisition Report",

        image:
          "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",

        description:
          "View all pending material requisitions in one report to ensure timely material issue and avoid operational delays.",
      },

      {
        title: "Status Tracking",

        image:
          "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",

        description:
          "Track requisition status like Issued, Pending, or Partially Issued directly from reports for smarter decision-making and monitoring.",
      },

      {
        title: "Link with Material Issue Voucher",

        image:
          "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg",

        description:
          "Link approved requisitions directly with Delivery Note or Stock Journal vouchers to maintain smooth inward and outward stock flow.",
      },

      {
        title: "User Wise Entry Control",

        image:
          "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",

        description:
          "Allow only authorized users to create requisition entries, improving security, audit control, and operational responsibility.",
      },

      {
        title: "Print Format with Approval Section",

        image:
          "https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg",

        description:
          "Generate clean printable requisition formats with department details, requested items, and approval signature sections for records and approvals.",
      },

    ],

  },
  {
    id: "bulk_cost_adjustment",
    title: "Random Bulk Cost Adjustment Entries",
    banner: "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg",
    features: [

      {
        title: "Multiple Voucher Types Support",

        image:
          "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",

        description:
          "Create cost adjustment entries for Journal, Payment, Receipt, or custom voucher types with support for accounts-only and inventory-based adjustments.",
      },

      {
        title: "Random Entry Generation",

        image:
          "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",

        description:
          "Generate random or fixed amount adjustment entries automatically with different dates or a common posting date for all entries.",
      },

      {
        title: "Cost Centre & Ledger Flexibility",

        image:
          "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

        description:
          "Allocate adjustments across multiple ledgers, projects, departments, and cost centres with complete flexibility and faster processing.",
      },

      {
        title: "Advanced Smart Filters",

        image:
          "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",

        description:
          "Apply holiday filters, weekly off filters, and date-wise filters to control voucher generation and avoid unwanted adjustment entries.",
      },

      {
        title: "GST & Tax Ledger Provision",

        image:
          "https://images.pexels.com/photos/4386371/pexels-photo-4386371.jpeg",

        description:
          "Select GST and tax ledgers during adjustments to ensure proper tax calculations and zero mismatch reporting accuracy.",
      },

      {
        title: "Preview Before Posting",

        image:
          "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg",

        description:
          "Preview all generated adjustment entries before final posting to instantly verify, edit, and avoid incorrect accounting entries.",
      },

      {
        title: "Automatic Voucher Posting",

        image:
          "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg",

        description:
          "Automatically create and post accounting vouchers for every adjustment without manual voucher entry work.",
      },

      {
        title: "Speed & Accuracy",

        image:
          "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",

        description:
          "Handle thousands of bulk cost adjustment entries quickly while eliminating manual posting errors and improving operational accuracy.",
      },

    ],

  },



];









// // export const servicesData = [
// //     {
// //         id: "web_development",
// //         title: "Web Development",
// //         img: "services-1.jpg",
// //         icon: "bi-code-slash",
// //         subtitle: "Tailoring Tally to specific business needs.",
// //         description:
// //             "We create modern and responsive website designs tailored to your business.",
// //         image: "/images/services.jpg",
// //         points: [
// //             "Responsive design",
// //             "Modern UI/UX",
// //             "SEO friendly",
// //         ],
// //         categories: [
// //             {
// //                 id: "frontend",
// //                 title: "Frontend Development",
// //                 items: [
// //                     { name: "React Development", slug: "react" },
// //                     { name: "HTML/CSS Websites", slug: "html-css" },
// //                     { name: "Landing Pages", slug: "landing-pages" },
// //                     { name: "Responsive Design", slug: "responsive" },
// //                 ],
// //             },
// //             {
// //                 id: "backend",
// //                 title: "Backend Development",
// //                 items: [
// //                     { name: "Node.js Development", slug: "nodejs" },
// //                     { name: "PHP Development", slug: "php" },
// //                     { name: "Laravel Development", slug: "laravel" },
// //                     { name: "API Development", slug: "api" },
// //                 ],
// //             },
// //             {
// //                 id: "fullstack",
// //                 title: "Full Stack Solutions",
// //                 items: [
// //                     { name: "MERN Stack", slug: "mern" },
// //                     { name: "Custom Web Apps", slug: "custom-web-apps" },
// //                     { name: "E-commerce Development", slug: "ecommerce" },
// //                 ],
// //             },
// //         ],
// //     },

// import { Feather } from "lucide-react";

// export const servicesData = [
//   {
//     id: "web_development",
//     title: "Web Development",
//     img: "services-1.jpg",
//     icon: "bi-code-slash",
//     subtitle: "Tailoring Tally to specific business needs.",
//     description:
//       "We create modern and responsive website designs tailored to your business.",
//     image: "/images/services.jpg",
//     points: [
//       "Responsive design",
//       "Modern UI/UX",
//       "SEO friendly",
//     ],
//     categories: [
//       {
//         id: "frontend",
//         title: "Frontend Development",
//         items: [
//           { name: "React Development", slug: "react" },
//           { name: "HTML/CSS Websites", slug: "html-css" },
//           { name: "Landing Pages", slug: "landing-pages" },
//           { name: "Responsive Design", slug: "responsive" },
//         ],
//       },
//       {
//         id: "backend",
//         title: "Backend Development",
//         items: [
//           { name: "Node.js Development", slug: "nodejs" },
//           { name: "PHP Development", slug: "php" },
//           { name: "Laravel Development", slug: "laravel" },
//           { name: "API Development", slug: "api" },
//         ],
//       },
//       {
//         id: "fullstack",
//         title: "Full Stack Solutions",
//         items: [
//           { name: "MERN Stack", slug: "mern" },
//           { name: "Custom Web Apps", slug: "custom-web-apps" },
//           { name: "E-commerce Development", slug: "ecommerce" },
//         ],
//       },
//     ],
//   },

//   {
//     id: "crm",
//     title: "Software Development",
//     subtitle: "We design and develop responsive, high-performance websites and web applications tailored to your business needs.",
//     description:
//       "Custom software solutions to automate and scale your business operations.",
//     image: "/images/services.jpg",
//     points: [
//       "Custom ERP systems",
//       "CRM solutions",
//       "Automation tools",
//     ],
//     img: "services-3.jpg",
//     icon: "bi-people",
//     categories: [
//       {
//         id: "crm-solutions",
//         title: "CRM Solutions",
//         items: [
//           { name: "Sales CRM", slug: "sales-crm" },
//           { name: "Lead Management", slug: "lead-management" },
//           { name: "Customer Support Systems", slug: "support-system" },
//         ],
//       },
//       {
//         id: "erp-systems",
//         title: "ERP Systems",
//         items: [
//           { name: "Inventory Management", slug: "inventory" },
//           { name: "HR Management", slug: "hrm" },
//           { name: "Accounting Systems", slug: "accounting" },
//         ],
//       },
//       {
//         id: "automation",
//         title: "Automation Tools",
//         items: [
//           { name: "Workflow Automation", slug: "workflow" },
//           { name: "Business Process Automation", slug: "bpa" },
//           { name: "Reporting Dashboards", slug: "dashboard" },
//         ],
//       },
//     ],
//   },

//   {
//     id: "tally",
//     title: "Tally",
//     subtitle: "We provide custom software solutions for businesses including CRM, ERP, and automation systems.",
//     description:
//       "Manage your products effectively with structured workflows.",
//     image: "/images/services.jpg",
//     points: [
//       "Inventory tracking",
//       "Product lifecycle",
//       "Reports & analytics",
//     ],
//     img: "services-1.jpg",
//     icon: "bi-calculator",
//     categories: [
//       {
//         id: "tally-software",
//         title: "Tally Softwares",
//         items: [
//           {
//             name: "Tally Software",
//             slug: "tally-software",
//             icon: "bi-calculator-fill",
//             description: "Complete business accounting and inventory management solution."

//           },
//           {
//             name: "Tally Prime",
//             slug: "tally-prime",
//             icon: "bi-bar-chart-fill",
//             description: "Modern business management software with powerful reporting."

//           },
//           {
//             name: "TSS",
//             slug: "tss",
//             icon: "bi-cloud-check-fill",
//             description: "Stay updated with latest features and statutory compliance."
//           },
//         ],
//       },
//       {
//         id: "tally-services",
//         title: "Tally Services",
//         items: [
//           {
//             name: "Tally on Cloud",
//             slug: "tally-cloud"
//           },
//           {
//             name: "Support",
//             slug: "support"
//           },
//         ],
//       },
//       {
//         id: "tally-customise",
//         slug: "customization",
//         title: "Tally Customise",
//         items: [
         
//            {
//             name: "School / College ERP",
//             slug: "school_college",
//             icon: "bi-mortarboard"
//           },

//           {
//             name: "Wholesale Garment",
//             slug: "wholesale_garment",
//              icon: "bi-bag "
//           },

//           {
//             name: "Mobile Shoppe/ Home Application",
//             slug: "mobile_shoppe_home_application",
//             icon: "bi-phone"
//           },
 
//          {
//             name: "Audit Trail",
//             slug: "audit_trail",
//             icon: "bi-clock-history"
//           },

//           {
//             name: "Purchase Requisition Note",
//             slug: "purchase_note",
//             icon: "bi-cart-check"
//           },

//           {
//             name: "Discount Schema(Payment-Based)",
//             slug: "discount_schema",
//             icon: "bi-percent"
//           },

//           {
//             name: "Bank Statement",
//             slug: "bank_statement",
//             icon: "bi-bank"
//           },

          
//           {
//             name: "Hospital Management",
//             slug: "hospital_management",
//               icon: "bi-heart-pulse"
//           },

//           {
//             name: "Auto Email",
//             slug: "auto_email",
//             icon: "bi-envelope"
//           },

//           {
//             name: "Petrol Pump",
//             slug: "petrol_pump",
//             icon: "bi-fuel-pump"
//           },

//           {
//             name: "Broker/ Salesman",
//             slug: "broker_salesman",
//             icon: "bi-people"
//           },
  

//           {
//             name: "APMC / ADA",
//             slug: "apmc_ada",
//             icon: "bi-shop"
//           },
//           {
//             name: "Fruit Adat",
//             slug: "fruit_adat",
//             icon: "bi-basket"
//           },
//        {
//             name: "Advanced Security",
//             slug: "advanced_security",
//             icon: "bi-shield-lock"
//           },

        
//           {
//             name: "Email OTP Login for Admin",
//             slug: "email_otp",
//             icon: "bi-shield-check"
//           },
          
//           {
//             name: "Warranty & AMC",
//             slug: "warranty_amc",
//             icon: "bi-patch-check"
//           },

//           {
//             name: "Other Software Integration With Tally Via API",
//             slug: "api_integration",
//             icon: "bi-diagram-3"
//           },

//           {
//             name: "Multi-Settelment With Auto Receipt",
//             slug: "multi_settlement",
//             icon: "bi-receipt"
//           },

//           {
//             name: "Jewellary Module",
//             slug: "jewellary_module",
//             icon: "bi-gem"
//           },

//           {
//             name: "Share Market",
//             slug: "share_market",
//             icon: "bi-graph-up"
//           },
//           {
//             name: "Document Linking System in Tally Prime Using DLL",
//             slug: "doc_link",
//             icon: "bi-link-45deg"
//           },

//           {
//             name: "Normal Bill Printing to POS Bill Printing",
//             slug: "normal_pos",
//             icon: "bi-printer"
//           },

//           {
//             name: "Dairy Integration with Dairy Software Via API",
//             slug: "dairy_integration",
//             icon: "bi-cup-hot"
//           },

//           {
//             name: "Recycle Bin Voucher Delete by Password",
//             slug: "recycle_bin",
//             icon: "bi-trash"
//           },

//           {
//             name: "Material Requisition",
//             slug: "material_requisition",
//             icon: "bi-box-seam"
//           },

//           {
//             name: "Random Bulk Cost Adjustment Entries",
//             slug: "bulk_cost_adjustment",
//             icon: "bi-calculator"
//           }
//         ],
//       },
//     ],
//   },
// ];

// export const customization_data = [
//   {
//     id: 'school_college',
//     title: "School/ College",
//     banner: "/images/school.png",
//     subtitle:
//       "Complete ERP & CRM solution for educational institutions.",

//     description:
//       "Manage admissions, fees, attendance, transport, payroll and academics easily.",

//     features: [
//       {
//         title: "Student Management",

//         image:
//           "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",

//         description:
//           "This feature helps in storing and organizing all student-related information like admission,attendance, and performance. It makes it easy to track and manage student records.",
//       },

//       {
//         title: "Fees Management",

//         image:
//           "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",

//         description:
//           "It allows the institution to collect, record, and track fee payments from students. The system also helps in generating receipts and sending reminders for due payments.",
//       },

//       {
//         title: "Document Management",

//         image:
//           "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",

//         description:
//           "This helps in storing and managing important documents like certificates, admission forms,and academic records. It ensures all documents are safe, organized, and easily accessible.",
//       },

//       {
//         title: "Transport Management",

//         image:
//           "https://images.pexels.com/photos/2946776/pexels-photo-2946776.jpeg",

//         description:
//           "It manages the transportation details like bus routes, driver info, and student pick-up/drop points. It improves the safety and efficiency of school or college transport services.",
//       },

//       {
//         title: "Easy Promotion/Migration",

//         image:
//           "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",

//         description:
//           "This feature helps in promoting students to the next class or migrating them to another course. It reduces manual work and avoids errors in academic records",
//       },

//       {
//         title: "ID card, Bonafide, LC printing",

//         image:
//           "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",

//         description:
//           "It helps in quickly generating ID cards, Bonafide certificates, and leaving certificates. This saves time and ensures professional, standardized documents.",
//       },

//       {
//         title: "Payroll module for staff",

//         image:
//           "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",

//         description:
//           "This handles staff salary, attendance, and deductions. It makes salary processing accurate,faster, and less stressful for the management.",
//       },
//     ],
//   },
//   {
//     id: 'wholesale_garment',
//     title: "Wholesale Garment",
//    banner: "/images/services-2.jpg",
//     features: [
//       {
//         title: "Multiple Types of Stock Items",
//         image: "/images/services-1.jpg",
//         description: "You can manage various types of clothes like shirts, pants, t-shirts, dresses, etc.",
//         description1: "It allows you to add different brands, categories, or types as separate stock items.",
//       },
//       {
//         title: "Set Different Sizes for Different Items:",
//         image: "/images/services-2.jpg",
//         description: "You can assign different size options (S, M, L, XL, etc.) to each type of clothing.",
//         description1: "For example, shirts can have M, L, XL, and pants can have 30, 32, 34, etc."
//       },
//       {
//         title: "Supports Around 500 Sizes",
//         image: "/images/services-3.jpg",
//         description: "This module can handle size options easily.",
//         description1: "No confusion or limitation, even for large stock"
//       },
//       {
//         title: "Print on 1 Page–MRP Wise and Size Wise:",
//         image: "/images/services.jpg",
//         description: "You can print your item list on one page showing MRP and Size.",
//         description1: "This saves paper and gives a clear overview of prices and available sizes."
//       },
//       {
//         title: "Track Items by MRP, Size, Color, Type:",
//         image: "/images/services.jpg",
//         description: "Easily find and manage garments based on their price, size, color, or type.",
//         description1: "Helps in quick billing and stock verification."
//       },
//       {
//         title: ".Category-Wise Report",
//         image: "/images/services.jpg",
//         description: "Get reports according to categories like Men’s Wear, Women’s Wear, Kids Wear,etc.",
//         description1: "Helps in analyzing which category is selling more."
//       },


//       {
//         title: "Advanced QR Code for Sales:",
//         image: "/images/services-1.jpg",
//         description: "Each item can have a QR Code for faster billing and scanning.",
//         description1: "Improves speed and accuracy in sales entry."
//       }
//     ],


//   },
//   {
//     id: 'mobile_shoppe_home_application',
//     title: "Mobile Shoppe/Home Application",
//     banner: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
//     features: [
//       {
//         title: "IMEI and Serial Number Tracking",
//         image: "/images/services-1.jpg",
//         description: "You can record and track each mobile by its IMEI number and Serial No. Wise during sale and purchase.",
//       },
//       {
//         title: "IMEI and Serial No. Wise Searching Report",
//         image: "/images/services-2.jpg",
//         description: "Easily search and find details of any mobile phone using its IMEI number andSerial No. Wise.",
//       },
//       {
//         title: "Multiple Payment Options at Sale",
//         image: "/images/services-3.jpg",
//         description: "Accept different types of payments like cash, card, UPI, EMI, etc. at the time of sal.",
//       },
//       {
//         title: "Finance Management at Sales",
//         image: "/images/services.jpg",
//         description: "Track and manage sales made on EMI or loan, with proper reports.",
//       },
//       {
//         title: "Advanced Barcode",
//         image: "/images/about-2.jpg",
//         description: "Generate and print barcodes for easy billing and inventory tracking.",
//       },
//       {
//         title: "Sales Through Barcode Scanning",
//         image: "/images/services.jpg",
//         description: "Quickly bill products by scanning barcodes at the counter.",
//       },
//       {
//         title: "View Customer History from IMEI No. and Serial No.Wise",
//         image: "/images/working-1.jpg",
//         description: "Find the customer's past purchase history using their mobile's IMEI number and Serial No Wise.",
//       },
//       {
//         title: "Provision to Set AMC / Warranty",
//         image: "/images/working-2.jpg",
//         description: "Maintain AMC (Annual Maintenance Contract) or warranty details for each product sold.",
//       },
//       {
//         title: "AMC Register/Warranty Register",
//         image: "/images/working-3.jpg",
//         description: "Keep a full register of all AMCs and warranties, so you never miss any service or expiry dates..",
//       },

//     ]
//   },
//   {
//     id: "audit_trail",
//     title: "Audit Trail",
//     banner:
//     "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",

//     features: [

//       {
//         title: "Track Every Transaction Change",

//         image:
//           "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

//         description:
//           "Records every Add, Edit, or Delete action performed on vouchers with complete history including date, time, and user details.",
//       },

//       {
//         title: "User Wise Activity Log",

//         image:
//           "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",

//         description:
//           "Shows which user made which change and when. Helps monitor staff activities efficiently in multi-user business environments.",
//       },

//       {
//         title: "Voucher History Report",

//         image:
//           "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",

//         description:
//           "View the complete version history of every voucher including modifications in amount, narration, ledger, and transaction details.",
//       },

//       {
//         title: "Time Stamp with User ID",

//         image:
//           "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",

//         description:
//           "Every action is automatically saved with exact timestamp and username for accurate auditing and internal verification.",
//       },

//       {
//         title: "Easy Comparison of Changes",

//         image:
//           "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",

//         description:
//           "Compare old and new values side-by-side to review changes quickly and maintain approval transparency.",
//       },

//       {
//         title: "Audit Trail Report by Date/User",

//         image:
//           "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg",

//         description:
//           "Generate detailed audit reports based on specific dates or users for accountability and discrepancy resolution.",
//       },

//       {
//         title: "GST & Income Tax Compliance",

//         image:
//           "https://images.pexels.com/photos/4386371/pexels-photo-4386371.jpeg",

//         description:
//           "Supports MCA compliance requirements under Companies Act 2013 and helps maintain proper audit trail records.",
//       },

//       {
//         title: "No Manual Tampering Possible",

//         image:
//           "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",

//         description:
//           "Audit trail entries are system-generated and cannot be deleted or modified manually, ensuring maximum security.",
//       },

//       {
//         title: "Seamless Integration in Tally Prime",

//         image:
//           "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",

//         description:
//           "Works smoothly inside Tally Prime without external software and delivers secure performance without slowing the system.",
//       },

//     ],
//   },
//   {
//     id: 'purchase_note',
//     title: "Purchase Requisition Note(PRN)",
//     banner: "/images/services-2.jpg",
//     features: [
//       {
//         title: " Create Requisition Notes",
//         image: "/images/working-3.jpg",
//         description: " Departments can raise requests for required items.",
//         description1: "Useful for Production, Sales, Accounts, and other teams."
//       },
//       {
//         title: " Department-Wise Request Management",
//         image: "/images/working-4.jpg",
//         description: " Requests are managed systematically department-wise.",
//         description1: "Ensures proper tracking and coordination."
//       },
//       {
//         title: " Item Requirement Details",
//         image: "/images/working-4.jpg",
//         description: " Mention item name, quantity, purpose, and delivery date.",
//         description1: "Helps avoid confusion in purchasing."
//       },
//       {
//         title: " Item Requirement Details",
//         image: "/images/working-4.jpg",
//         description: "  Every request is saved in Tally as a requisition document.",
//         description1: "Maintains proper records for future reference."
//       },
//       {
//         title: " Purchase Linking Facility",
//         image: "/images/working-4.jpg",
//         description: "Requisition can be linked directly with Purchase.",
//         description1: " Simplifies purchase processing."
//       },
//       {
//         title: " Avoids Duplicate Purchases",
//         image: "/images/working-4.jpg",
//         description: "Prevents over-ordering and duplicate buying.",
//         description1: "Improves inventory planning."
//       },
//       {
//         title: " Request Status Tracking",
//         image: "/images/working-4.jpg",
//         description: "Track status like Pending, Approved, Rejected, and Fulfilled.",
//         description1: "Helps identify urgent and routine requirements easily."
//       },
//       {
//         title: "Requisition Reports",
//         image: "/images/working-3.jpg",
//         description: "Generate reports like Requisition Summary and Pending Items.",
//         description1: "Provides better monitoring and analysis."
//       },
//       {
//         title: " Convert PRN to Purchase Order",
//         image: "/images/working-1.jpg",
//         description: "Option to convert PRN directly into Purchase Order.",
//         description1: "Reduces manual work and saves time."
//       },
//       {
//         title: "Full Transparency",
//         image: "/images/working-2.jpg",
//         description: "Shows who raised the request, when, and for what purpose.",
//         description1: " Improves accountability."
//       },
//       {
//         title: "Requisition History Maintenance",
//         image: "/images/working-3.jpg",
//         description: " Maintains complete requisition history.",
//         description1: "Useful for future analysis and audits"
//       },
//       {
//         title: "Print & Export Facility",
//         image: "/images/working-1.jpg",
//         description: " Can be printed or exported as PDF.",
//         description1: "Easy for approvals and offline use."
//       },
//     ]

//   },
//   {
//     id: 'discount_schema',
//     title: "Discount Schema(Payment-Based)",
//    banner: "/images/services-2.jpg",
//     features: [

//       {
//         title: "On-Screen Discount Notification",

//         image:
//           "https://images.pexels.com/photos/4386367/pexels-photo-4386367.jpeg",

//         description:
//           "Automatically shows payment discount offers during Sales Invoice or Receipt Voucher creation for customer awareness.",
//       },

//       {
//         title: "Print on Invoice & Receipt",

//         image:
//           "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

//         description:
//           "Discount offers and payment terms are printed directly on invoices and receipts for clear communication.",
//       },

//       {
//         title: "Flexible Discount Configuration",

//         image:
//           "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",

//         description:
//           "Easily update discount percentage and payment duration without any programming changes.",
//       },

//       {
//         title: "Partywise Billwise Reports",

//         image:
//           "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",

//         description:
//           "Generate customer-wise and bill-wise discount reports for accurate payment tracking and analysis.",
//       },

//       {
//         title: "Customer Payment Awareness",

//         image:
//           "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",

//         description:
//           "Helps customers clearly understand available payment offers and encourages faster payments.",
//       },

//       {
//         title: "No Changes in Accounting Entries",

//         image:
//           "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",

//         description:
//           "Works only as an informational module and does not modify accounting entries automatically.",
//       },

//       {
//         title: "Improves Cash Flow",

//         image:
//           "https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg",

//         description:
//           "Encourages early payment collection and reduces pending dues for smoother business cash flow.",
//       },

//       {
//         title: "Transparent Offer Communication",

//         image:
//           "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

//         description:
//           "Ensures all customers receive consistent and transparent discount offer communication.",
//       },

//       {
//         title: "Multi-Level Discount Scheme",

//         image:
//           "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg",

//         description:
//           "Supports different discount slabs like 5%, 3%, and 1% based on payment duration.",
//       },

//     ],
//   },
//   {
//     id: "bank_statement",
//     title: "Bank Statement Import ",
//   banner: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGJhbmt8ZW58MHx8MHx8fDA%3D",
//     features: [
//       {
//         title: "Import Excel Bank Statements into Tally",
//         image: "https://images.unsplash.com/photo-1763872849312-67984fbf5f68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJBTkslMjBTVEFURU1FTlQlMjBJTVBPUlQlMjBNT0RVTEV8ZW58MHx8MHx8fDA%3D",
//         description: "Convert your bank statement to Excel and directly bring it into Tally.",
//         description1: "No more typing each entry manually."
//       },
//       {
//         title: "Works with Any Bank, Any Format",
//         image: "https://images.unsplash.com/photo-1576765915649-b6f4be4ec5c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJBTkslMjBTVEFURU1FTlQlMjBJTVBPUlQlMjBNT0RVTEUlMjBXb3JrcyUyMHdpdGglMjBBbnklMjBCYW5rJTJDJTIwQW55JTIwRm9ybWF0fGVufDB8fDB8fHww",
//         description: "Supports all Indian banks – HDFC, SBI, ICICI, Axis, etc.",
//         description1: "No fixed format needed. It accepts almost all Excel layouts."
//       },
//       {
//         title: "Easy Excel Column Mapping",
//         image: "https://images.unsplash.com/photo-1678564205744-3dc5913fc3fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJBTkslMjBTVEFURU1FTlQlMjBJTVBPUlQlMjBNT0RVTEUlMjBXb3JrcyUyMHdpdGglMjBBbnklMjBCYW5rJTJDJTIwQW55JTIwRm9ybWF0fGVufDB8fDB8fHww",
//         description: "Match your Excel fields (Date, Amount, Narration) with Tally fields easily.",
//         description1: "One-time setup; use it again and again."
//       },
//       {
//         title: "Supports Double & Single Amount Mode",
//         image: "https://images.unsplash.com/photo-1565371768838-2479eb537a78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJBTkslMjBTVEFURU1FTlQlMjBJTVBPUlQlMjBNT0RVTEUlMjBXb3JrcyUyMHdpdGglMjBBbnklMjBCYW5rJTJDJTIwQW55JTIwRm9ybWF0fGVufDB8fDB8fHww",
//         description: "You can use either Debit/Credit format or Single column amount.",
//         description1: "Flexible as per your Excel data style."
//       },
//       {
//         title: ".Find & Replace Utility",
//         image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFua3xlbnwwfHwwfHx8MA%3D%3D",
//         description: "Quickly search any text in narration or fields and replace it before importing.",
//         description1: "Useful for correcting account names or standardizing ledgers."
//       },
//       {
//         title: "Narration Filter Utility",
//         image: "https://plus.unsplash.com/premium_photo-1674726322494-f972e5486bc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJhbmt8ZW58MHx8MHx8fDA%3D",
//         description: "Automatically detects keywords like “ATM”, “NEFT”, “Salary”, etc.",
//         description1: "Helps in posting to correct ledger accounts based on narration."
//       },
//       {
//         title: "Change Voucher Type in Bulk",
//         image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmt8ZW58MHx8MHx8fDA%3D",
//         description: "Apply voucher type (Payment, Receipt, Contra, Journal) to all entries at once.",
//         description1: "Saves lots of time when importing hundreds of rows."
//       },
//       {
//         title: "How This Helps You",
//         image: "https://plus.unsplash.com/premium_photo-1679814366168-f6f39e7e8ae4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFua3xlbnwwfHwwfHx8MA%3D%3D",
//         description: "Saves 90% time in bank entry posting",
//         description1: "Reduces errors due to manual typing",
//         description2: "Handles bulk data with ease",
//         description3: "Clean & organized accounting in Tally"
//       },
//       {
//         title: "Ideal For",
//         image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJhbmt8ZW58MHx8MHx8fDA%3D",
//         description: "Small & Medium Businesses",
//         description1: "Accountants handling multiple clients",
//         description2: "Traders, Shops, and Service Providers"
//       }
//     ]

//   },
//   {
//     id: "hospital_management",
//     title: " Hosptal Management ",
//     banner: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
//     features: [
//       {
//         title: "Ward and Bed Management",
//         image: "https://images.unsplash.com/photo-1628373961147-87e7f514a35f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGhvc3BpdGFsfGVufDB8fDB8fHww",
//         description: "Allocate and manage wards and beds efficiently.",
//         description1: "Track vacant, occupied, and reserved beds in real-time."
//       },
//       {
//         title: "Doctors Management",
//         image: "https://plus.unsplash.com/premium_photo-1681995284211-b0ea14a73cbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhvc3BpdGFsfGVufDB8fDB8fHww",
//         description: "Maintain doctor profiles, schedules, and specialties.",
//         description1: "Track OPD and IPD patient attendance and remuneration."
//       },
//       {
//         title: "Patient Management",
//         image: "https://plus.unsplash.com/premium_photo-1681995206380-babb9b6debc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhvc3BpdGFsfGVufDB8fDB8fHww",
//         description: "Register new patients and maintain complete patient records",
//         description1: "Easy access to visit history and billing info."
//       },
//       {
//         title: "OPD Billing",
//         image: "https://images.unsplash.com/photo-1753955900180-142efbf4c162?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T1BEJTIwQmlsbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
//         description: "Generate bills for outpatient visits instantly.",
//         description1: "Supports different consultation fees, services, and medicines."
//       },
//       {
//         title: "IPD Admission",
//         image: "https://plus.unsplash.com/premium_photo-1681843129112-f7d11a2f17e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
//         description: "Admit patients for in-patient treatment with detailed records",
//         description1: "Assign wards and beds, and link with doctor details."
//       },
//       {
//         title: "Bed Shifting ",
//         image: "https://plus.unsplash.com/premium_photo-1681995326134-cdc947934015?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
//         description: "Easily update records when patients are shifted between beds or wards"
//       },
//       {
//         title: "IPD Receipt",
//         image: "https://plus.unsplash.com/premium_photo-1726769176212-1ab1fd60f42a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWwlMjBJUEQlMjBSZWNlaXB0fGVufDB8fDB8fHww",
//         description: "Track and generate receipts for payments made by in-patients."
//       },
//       {
//         title: "IPD Bill ",
//         image: "https://images.unsplash.com/photo-1573922423609-081d60747c48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvc3BpdGFsJTIwSVBEJTIwUmVjZWlwdHxlbnwwfHwwfHx8MA%3D%3D",
//         description: "Generate final or interim bills for admitted patients.",
//         description1: "Includes stay charges, services, medicines, etc."
//       },
//       {
//         title: "Discharge",
//         image: "https://images.unsplash.com/photo-1581056771392-8a90ddb76831?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWwlMjBEaXNjaGFyZ2V8ZW58MHx8MHx8fDA%3D",
//         description: "Discharge patient with complete summary.",
//         description1: "Automatically calculates total stay and charges."
//       },
//       {
//         title: "Patient Register ",
//         image: "https://plus.unsplash.com/premium_photo-1726862795125-4f9b8dd8831a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWwlMjBQYXRpZW50JTIwUmVnaXN0ZXJ8ZW58MHx8MHx8fDA%3D",
//         description: "Centralized register of all patients – OPD & IPD",
//         description1: "Quick search by name, date, doctor, or ID."
//       },
//       {
//         title: "Bed Allotment",
//         image: "https://images.unsplash.com/photo-1749087869560-1f00fe44b58e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWwlMjBCZWQlMjBBbGxvdG1lbnQlMjAlM0F8ZW58MHx8MHx8fDA%3D",
//         description: "Assign available beds to new patients with status tracking"
//       },
//       {
//         title: "Bed Occupancy",
//         image: "https://plus.unsplash.com/premium_photo-1664476831263-b0dfa1e270a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvc3BpdGFsJTIwQmVkJTIwQWxsb3RtZW50JTIwJTNBfGVufDB8fDB8fHww",
//         description: "View reports on bed usage – available, reserved, or occupied."
//       },
//       {
//         title: "OPD Register",
//         image: "https://images.unsplash.com/photo-1606318313647-137d1f3b4d3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWwlMjBPUEQlMjBSZWdpc3RlciUyMCUzQXxlbnwwfHwwfHx8MA%3D%3D",
//         description: "Detailed register of all outpatient visits and billing"

//       },
//       {
//         title: "IPD Collection",
//         image: "https://images.unsplash.com/photo-1742934027594-876ca3626df4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvc3BpdGFsJTIwT1BEJTIwUmVnaXN0ZXIlMjAlM0F8ZW58MHx8MHx8fDA%3D",
//         description: "Track all collections related to IPD patients."

//       },
//       {
//         title: "Rental Doctor Remuneration",
//         image: "https://plus.unsplash.com/premium_photo-1661328213003-c77d9ba01131?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvc3BpdGFsJTIwT1BEJTIwUmVnaXN0ZXIlMjAlM0F8ZW58MHx8MHx8fDA%3D",
//         description: "Calculate and manage payments to visiting or rental doctors based on patient count or fixed fee."
//       },
//       {
//         title: "IPD Package",
//         image: "https://plus.unsplash.com/premium_photo-1764687908039-0da3fcc723b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWwlMjBJUEQlMjBQYWNrYWdlfGVufDB8fDB8fHww",
//         description: "Manage fixed-price treatment packages for IPD services."

//       },
//       {
//         title: "Profit and Loss Account",
//         image: "https://plus.unsplash.com/premium_photo-1661284946633-0bf80b5d0a9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWwlMjBQcm9maXQlMjBhbmQlMjBMb3NzJTIwQWNjb3VudHxlbnwwfHwwfHx8MA%3D%3D",
//         description: "View income and expenses of hospital operations directly in Tally"
//       },
//       {
//         title: "Balance Sheet",
//         image: "https://images.unsplash.com/photo-1710503913397-df9bfea7e50b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWwlMjBQcm9maXQlMjBhbmQlMjBMb3NzJTIwQWNjb3VudHxlbnwwfHwwfHx8MA%3D%3D",
//         description: "Monitor hospital’s financial health and assets in real time."
//       },


//     ]
//   },
//   {
//     id: "auto_email",
//     title: "Auto Email",
//     banner: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
//     features: [

//       {
//         title: "Automatic PDF Email Sending",

//         image:
//           "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg",

//         description:
//           "Automatically send invoices, statements, confirmations, and reports as secure PDF attachments directly from Tally.",
//       },

//       {
//         title: "Ledger & Outstanding Sharing",

//         image:
//           "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",

//         description:
//           "Send ledger details, outstanding balances, and account confirmations party-wise through email instantly.",
//       },

//       {
//         title: "Invoice Email Tracking",

//         image:
//           "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",

//         description:
//           "Track whether invoices or vouchers were emailed using Daybook, Sales Register, or Party Ledger status indicators.",
//       },

//       {
//         title: "Bulk Voucher Emailing",

//         image:
//           "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",

//         description:
//           "Send multiple invoices and vouchers together in a single batch with print and export support.",
//       },

//       {
//         title: "Multi Export Options",

//         image:
//           "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

//         description:
//           "Supports PDF, Excel, XML export and printing along with simultaneous email sending for faster workflow.",
//       },

//       {
//         title: "Bulk Update Contact Details",

//         image:
//           "https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg",

//         description:
//           "Update ledger email IDs, birthdays, anniversaries, and contact details in bulk without manual editing.",
//       },

//       {
//         title: "Selected Ledger Statement Mailing",

//         image:
//           "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg",

//         description:
//           "Email one or multiple selected ledger statements with complete transaction history and balances.",
//       },

//       {
//         title: "Outstanding & Confirmation Reports",

//         image:
//           "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

//         description:
//           "Send outstanding reports with account confirmations for reconciliations, follow-ups, and audit purposes.",
//       },

//       {
//         title: "Automatic CC Email Feature",

//         image:
//           "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",

//         description:
//           "Automatically add admin or company email IDs in CC for every outgoing mail to maintain internal communication records.",
//       },

//       {
//         title: "Birthday & Anniversary Greetings",

//         image:
//           "https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg",

//         description:
//           "Automatically send personalized birthday and anniversary greeting emails to clients and business parties.",
//       },

//       {
//         title: "Secure & Error-Free Communication",

//         image:
//           "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",

//         description:
//           "Ensures professional, secure, and organized business communication directly from Tally Prime.",
//       },

//     ],
//   },
//   {
//     id: "petrol_pump",
//     title: "Petrol Pump",
//     banner: "",
//     features: [

//       {
//         title: "Daily Fuel Rate Updates",

//         image:
//           "https://images.pexels.com/photos/248539/pexels-photo-248539.jpeg",

//         description:
//           "Update petrol and diesel prices daily as per market rates, company policies, or government regulations with automatic billing updates.",
//       },

//       {
//         title: "Multiple Tanks & Nozzles Support",

//         image:
//           "https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg",

//         description:
//           "Manage multiple fuel tanks and dispensing nozzles with accurate stock tracking, fuel monitoring, and nozzle mapping.",
//       },

//       {
//         title: "Credit Party Vehicle Management",

//         image:
//           "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg",

//         description:
//           "Store and manage multiple vehicles under one customer account with vehicle-wise fuel consumption and credit tracking.",
//       },

//       {
//         title: "Multi Cashier & Salesperson Management",

//         image:
//           "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",

//         description:
//           "Assign multiple cashiers or salespersons to different nozzles and shifts with complete performance and transaction monitoring.",
//       },

//       {
//         title: "Cashier Wise Payment Tracking",

//         image:
//           "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",

//         description:
//           "Track cashier-wise cash sales, UPI payments, and credit transactions for accurate reconciliation and accounting.",
//       },

//       {
//         title: "Nozzle Wise Sales Tracking",

//         image:
//           "data:image/jpeg;base64,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",

//         description:
//           "Monitor fuel dispensing and sales nozzle-wise for transparency, performance analysis, and discrepancy detection.",
//       },

//       {
//         title: "Cashier Summary Reports",

//         image:
//           "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",

//         description:
//           "Generate cashier-wise summary reports including meter readings, cash collection, fuel sales, receivables, and shortages.",
//       },

//       {
//         title: "Manager Summary Dashboard",

//         image:
//           "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

//         description:
//           "View consolidated reports across all nozzles, cashiers, sales, shortages, and operational activities for management decisions.",
//       },

//       {
//         title: "Ledger Bill Summary for Credit Parties",

//         image:
//           "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

//         description:
//           "Generate weekly or monthly bills for credit customers with detailed vehicle-wise fuel transaction reports.",
//       },

//       {
//         title: "Meter Reading Reports",

//         image:
//           "data:image/jpeg;base64,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",

//         description:
//           "Capture and maintain nozzle meter readings to ensure accurate fuel dispensing, stock auditing, and theft detection.",
//       },

//       {
//         title: "Tank Wise & Nozzle Wise Reports",

//         image:
//           "https://images.pexels.com/photos/248539/pexels-photo-248539.jpeg",

//         description:
//           "Generate tank-wise and nozzle-wise fuel reports showing stock levels, fuel issued, and remaining inventory in real-time.",
//       },

//       {
//         title: "Daily Summary Reports",

//         image:
//           "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",

//         description:
//           "Get complete day-end summaries including sales, inventory status, cash collection, tank performance, and reconciliation reports.",
//       },

//       {
//         title: "Tally Integration",

//         image:
//           "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg",

//         description:
//           "Automatically integrate daily petrol pump transactions and reports directly into Tally for accurate accounting and bookkeeping.",
//       },

//     ],


//   },
//   {
//     id: "broker_salesman",
//     title: "Broker Salesman",
//    banner: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
//     features: [

//       {
//         title: "Salesman Wise Commission Setup",

//         image:
//           "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

//         description:
//           "Set different commission percentages for each salesman based on their individual sales performance and business requirements.",
//       },

//       {
//         title: "Stock Item Wise Commission",

//         image:
//           "https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg",

//         description:
//           "Configure commission based on products, product groups, or item categories for accurate and flexible commission management.",
//       },

//       {
//         title: "Commission by Quantity or Amount",

//         image:
//           "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",

//         description:
//           "Calculate commissions either based on quantity sold or total sales amount to suit different sales strategies and policies.",
//       },

//       {
//         title: "Salesman Commission Report",

//         image:
//           "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",

//         description:
//           "Generate detailed salesman commission reports showing earned commissions, sales performance, and payment calculations.",
//       },

//       {
//         title: "Monthly Party Wise Commission Report",

//         image:
//           "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

//         description:
//           "View monthly commission reports linked with both customers and salesmen for better business analysis and tracking.",
//       },

//       {
//         title: "Stock Item Wise Sales Analysis",

//         image:
//           "https://images.pexels.com/photos/7947758/pexels-photo-7947758.jpeg",

//         description:
//           "Analyze which products are selling the most and identify the salesmen responsible for higher product sales performance.",
//       },

//       {
//         title: "Salesman Wise Outstanding Tracking",

//         image:
//           "https://images.pexels.com/photos/4386371/pexels-photo-4386371.jpeg",

//         description:
//           "Track pending payments, dues, and outstanding balances related to each salesman for better financial monitoring.",
//       },

//     ],

//   },
//   {
//     id: "apmc_ada",
//     title: "APMC ADA",
//    banner: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",
//     features: [

//       {
//         title: "Multi Farmer Purchase Entry",

//         image:
//           "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg",

//         description:
//           "Create purchase entries for multiple farmers in a single voucher with farmer details, quantity, bags, weight, rate, and automatic total calculations.",
//       },

//       {
//         title: "Bags & Weight Based Purchase",

//         image:
//           "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg",

//         description:
//           "Supports dual units like Bags and Kilograms with automatic unit conversion and quantity-wise or weight-wise rate calculations.",
//       },

//       {
//         title: "Farmer Patti Generation",

//         image:
//           "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

//         description:
//           "Automatically generate farmer patti with gross amount, deductions, commission, market fees, and final payable amount in print-ready format.",
//       },

//       {
//         title: "Commission Calculation",

//         image:
//           "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",

//         description:
//           "Calculate commission automatically based on percentage, per bag, per kilogram, or product-wise commission structures.",
//       },

//       {
//         title: "Buyer & Seller Expense Management",

//         image:
//           "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",

//         description:
//           "Manage buyer and seller expenses like transport, market fee, hamali, weighment, and packaging with automatic expense distribution.",
//       },

//       {
//         title: "Cuttings & Deductions Handling",

//         image:
//           "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",

//         description:
//           "Handle deductions such as weight cutting, commission cutting, packing charges, and rate adjustments product-wise.",
//       },

//       {
//         title: "Automatic Journal Posting",

//         image:
//           "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg",

//         description:
//           "Automatically generate accounting journal entries for farmer payable, commission income, and buyer/seller expenses.",
//       },

//       {
//         title: "Ledger Auto Creation & Mapping",

//         image:
//           "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

//         description:
//           "Automatically create and map ledgers for farmers, buyers, and expenses with proper accounting group allocation.",
//       },

//       {
//         title: "Farmer Wise Reports",

//         image:
//           "https://images.pexels.com/photos/7947758/pexels-photo-7947758.jpeg",

//         description:
//           "Generate farmer-wise reports showing quantity sold, rate, deductions, payable amount, and filters by village, product, or date.",
//       },

//       {
//         title: "Buyer Wise Reports",

//         image:
//           "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",

//         description:
//           "View buyer-wise reports including purchased products, total amount, expenses paid, and date or item-wise analysis.",
//       },

//       {
//         title: "Buyer Expense Reports",

//         image:
//           "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",

//         description:
//           "Track buyer-wise and date-wise expense details including commission, gross amount, and net payable analysis.",
//       },

//       {
//         title: "Item Wise Product Reports",

//         image:
//           "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",

//         description:
//           "Generate product-wise quantity and amount summaries along with supplier and farmer details for better inventory analysis.",
//       },

//     ],

//   },
//   {
//     id: "fruit_adat",
//     title: "Fruit ADAT",
//    banner: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
//     features: [

//       {
//         title: "Multi Farmer Fruit Purchase Entry",

//         image:
//           "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg",

//         description:
//           "Add multiple fruit farmers in a single purchase entry with farmer-wise item details, bags, weight, rates, and gross amount calculations.",
//       },

//       {
//         title: "Perishable Entry Tracking",

//         image:
//           "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg",

//         description:
//           "Track fruit arrivals with quality grades, arrival dates, freshness details, and perishable inventory management.",
//       },

//       {
//         title: "Automatic Total Calculations",

//         image:
//           "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

//         description:
//           "Automatically calculate total bags, total weight, and total gross amount for accurate purchase management.",
//       },

//       {
//         title: "Mixed Unit Handling",

//         image:
//           "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",

//         description:
//           "Supports mixed units like Bags, Crates, Kilograms, and Quintals with configurable item-wise unit conversion.",
//       },

//       {
//         title: "Weight & Crate Wise Rate Entry",

//         image:
//           "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",

//         description:
//           "Enter rates based on weight or crate quantity for flexible fruit purchase and pricing operations.",
//       },

//       {
//         title: "Auto Farmer Patti Generation",

//         image:
//           "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",

//         description:
//           "Generate farmer patti automatically with farmer details, fruit items, deductions, net payable amount, and printable business format.",
//       },

//       {
//         title: "Commission Calculation",

//         image:
//           "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",

//         description:
//           "Calculate commissions based on flat percentage, per kilogram, per crate, or fruit-type-wise commission structures.",
//       },

//       {
//         title: "Commission Ledger Integration",

//         image:
//           "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",

//         description:
//           "Automatically link commission calculations with commission income ledger entries for smooth accounting management.",
//       },

//       {
//         title: "Cuttings & Deduction Management",

//         image:
//           "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg",

//         description:
//           "Manage deductions like commission, weighment charges, packing recovery, and market waste deductions automatically.",
//       },

//       {
//         title: "Packing & Weighment Charges",

//         image:
//           "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg",

//         description:
//           "Track packing material charges, weighing costs, and additional operational expenses accurately during settlement.",
//       },

//       {
//         title: "Farmer Settlement Reports",

//         image:
//           "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

//         description:
//           "Generate farmer-wise settlement reports with gross amount, deductions, commission, and net payable summaries.",
//       },

//       {
//         title: "Fruit Wise Analysis Reports",

//         image:
//           "https://images.pexels.com/photos/7947758/pexels-photo-7947758.jpeg",

//         description:
//           "Analyze fruit-wise purchase quantity, rates, farmer supply details, and overall business performance with smart reporting.",
//       },

//     ],

//   }, {
//     id: "advanced_security",
//     title: "Advanced Security",
//    banner:
//     "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",

//     features: [

//       {
//         title: "Userwise Voucher Type Security",

//         image:
//           "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

//         description:
//           "Allow or restrict users from accessing specific voucher types like Sales, Purchase, Payment, and Receipt for secure transaction management.",
//       },

//       {
//         title: "Negative Stock Control",

//         image:
//           "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg",

//         description:
//           "Prevent users from creating invoices when stock is unavailable, ensuring accurate inventory management and avoiding over-selling.",
//       },

//       {
//         title: "Godown & Location Wise Access",

//         image:
//           "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg",

//         description:
//           "Assign users to specific godowns or warehouse locations and restrict access to authorized stock and inventory only.",
//       },

//       {
//         title: "Userwise Ledger Security",

//         image:
//           "https://images.pexels.com/photos/4386371/pexels-photo-4386371.jpeg",

//         description:
//           "Hide or restrict confidential ledgers like Salary, Expenses, Revenue, and Accounts from unauthorized users for better financial security.",
//       },

//       {
//         title: "Userwise Cutoff Date Control",

//         image:
//           "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",

//         description:
//           "Set cutoff dates to prevent users from creating, modifying, or deleting entries before finalized accounting periods.",
//       },

//       {
//         title: "Secure Transaction Monitoring",

//         image:
//           "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",

//         description:
//           "Monitor user activities and restrict unauthorized financial operations for safer accounting and audit management.",
//       },

//       {
//         title: "Role Based User Permissions",

//         image:
//           "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

//         description:
//           "Create customized access permissions for accountants, managers, operators, and admins based on their responsibilities.",
//       },

//       {
//         title: "Data Protection & Access Control",

//         image:
//           "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",

//         description:
//           "Protect sensitive accounting and inventory data with advanced user-level access restrictions and security configurations.",
//       },

//     ],

//   },

//   {
//     id: "email_otp",
//     title: "Email-Based OTP Login",
//     banner: "https://media.istockphoto.com/id/1830134328/photo/businesswoman-login-to-the-network-by-username-and-password-on-the-virtual-screen-while.jpg?s=612x612&w=0&k=20&c=eatUvWzYnUGxJH0FH_XVNccok963hNRtSHv9lsjYUik=",
    
//     features: [
//       {
//         title: "Email-Based OTP Login",
//         image: "https://media.istockphoto.com/id/1985229015/photo/two-steps-authentication-concept-otp-code-showing-on-phone-screen-for-log-in-on-web-on-laptop.jpg?s=612x612&w=0&k=20&c=j9BeMJ0qrxSCpkNr6jB7gGoFzZFDCrQN-1DtDyfB7-c=",
//         description: "Every time admin tries to log in, an OTP (One-Time Password) is sent to their email.Tally will open only after entering the correct OTP.",

//       },
//       {
//         title: "Extra Security for Admin Access",
//         image: "https://plus.unsplash.com/premium_photo-1764705653658-7e6649bc015e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzk1fHxFeHRyYSUyMFNlY3VyaXR5JTIwZm9yJTIwQWRtaW4lMjBBY2Nlc3N8ZW58MHx8MHx8fDA%3D",
//         description: "Prevents unauthorized users from opening Tally.Ideal for offices with shared computers or remote access.",

//       },
//       {
//         title: "Custom Email Settings",
//         image: "https://plus.unsplash.com/premium_photo-1661375025352-d5a4d633999b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VzdG9tJTIwRW1haWwlMjBTZXR0aW5nc3xlbnwwfHwwfHx8MA%3D%3D",
//         description: "OTP is sent from your own email ID (you can set this).",
        

//       },
//       {
//         title: "OTP Expiry Time",
//         image: "https://images.unsplash.com/photo-1604419254059-8b62131c8c59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE9UUCUyMEV4cGlyeSUyMFRpbWV8ZW58MHx8MHx8fDA%3D",
//         description: "Each OTP is valid only for a limited time (e.g., 5 minutes).After expiry, a fresh OTP is needed.",

//       },
//       {
//         title: "Alert on Wrong OTP",
//         image: "https://media.istockphoto.com/id/2177980865/photo/system-warning-hacked-alert-cyberattack-on-smartphone-programmer-businessman-staff-developer.webp?a=1&b=1&s=612x612&w=0&k=20&c=K6z9dPvxK0F1eZN1h9P5_cQJUqz0FCSNmrD3tVn9jVY=",
//         description: "If someone tries to enter the wrong OTP multiple times, an alert email is sent to the admin.Helps track unauthorized login attempts.",

//       },
//       {
//         title: "Fully Compatible with Tally Prime",
//         image: "https://media.istockphoto.com/id/1269998545/photo/documents-waiting-to-read-by-barcode-reader.jpg?s=612x612&w=0&k=20&c=BVsMX-qzkqVibvb6giy_SfZ7slD-W_LbVhP_ahdrxDQ=",
//         description: "Doesn’t affect your regular Tally work.Runs smoothly in the background without slowing down the system.",

//       },
//     ]


//   },
//   {
//     id: "warranty_amc",
//     title: "Warranty & AMC",
//     banner: "https://media.istockphoto.com/id/2202847872/photo/in-this-business-management-concept-a-businessman-erases-a-white-arrow-and-draws-a-yellow.jpg?s=612x612&w=0&k=20&c=VsrUk7MqH5mSwfhhYibYP7Cpjq7P_VAs3u3zMPXejsA=",
//     features: [
//       {
//         title: "Warranty Tracking",
//         image: "https://plus.unsplash.com/premium_photo-1681433394443-f00c5d39087e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V2FycmFudHklMjBUcmFja2luZ3xlbnwwfHwwfHx8MA%3D%3D",
//         description: "Track product-wise warranty periods (start & end date) for each customer.",

//       },

//       {
//         title: "AMC Contract Management",
//         image: "https://plus.unsplash.com/premium_photo-1723874476102-de001b6688ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QU1DJTIwQ29udHJhY3QlMjBNYW5hZ2VtZW50fGVufDB8fDB8fHww",
//         description: "Maintain AMC records with contract start/end dates, service terms, and renewal reminders.",

//       },
//       {
//         title: "Auto Alerts & Notifications",
//         image: "https://media.istockphoto.com/id/1497616582/photo/hand-using-smartphone-with-showing-the-bell-icon-and-notifications-of-new-messages-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=WhstWHQTOtL2GsyU29qLfGq3VkZtOqKETeEWCCATfnY=",
//         description: " Get automated alerts for warranty expirations or AMC renewals (via pop-up, print, or email).",

//       },
//       {
//         title: "Customer-wise Service History",
//         image: "https://media.istockphoto.com/id/638222094/photo/man-holding-a-tablet-showing-customer-service-concept.jpg?s=612x612&w=0&k=20&c=sTqc0WAqmyV9sqSzBSHeMAlYBjR03U1KGiQG2w2-XSc=",
//         description: " View complete service records, complaints, and visits for each customer/product.",

//       },
//       {
//         title: "Product Serial Number Mapping",
//         image: "https://media.istockphoto.com/id/520409274/photo/partial-product-code.jpg?s=612x612&w=0&k=20&c=Jr96V8SbXne7PXjxdYcW4W6SCdI1L7g39j3522EBvmI=",
//         description: " Link each sold product with a unique serial number for warranty/AMC verification.",

//       },
//       {
//         title: "Invoice Linkage",
//         image: "https://media.istockphoto.com/id/1037577382/photo/invoice-in-envelope-with-pen-and-glasses-document-is-mock-up.jpg?s=612x612&w=0&k=20&c=fPHFdC7_eWgqDlmRvIHNCPves0qmb0ytMyQUKHzcj2o=",
//         description: " Automatically link warranty/AMC to specific invoices for easier tracking and validationLink each sold product with a unique serial number for warranty/AMC verification.",

//       },
//       {
//         title: "Report Generation",
//         image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fFJlcG9ydCUyMEdlbmVyYXRpb258ZW58MHx8MHx8fDA%3D",
//         description: "Generate reports like: Warranty Expiry List, AMC Due List,Product-wise AMC Status",

//       },
//       {
//         title: "Renewal Management",
//         image: "https://media.istockphoto.com/id/1144570336/photo/change-management-in-organization-and-business-concept-with-consultant-presenting-icons-of.jpg?s=612x612&w=0&k=20&c=jWzl7sIxO2gmE37euLh0Eih8bpKhhDM8FP8Wh0_yae8=",
//         description: "Enable easy creation of AMC renewal entries with reminders and past contract details",

//       },
//     ]
//   },
//   {
//     id: "api_integration",
//     title: "Other Software integration With Tally Via API",
//     banner: "https://media.istockphoto.com/id/2168215145/photo/businessman-using-kpi-dashboard-management-data-system-kpi-connected-in-database-for-follow.jpg?s=612x612&w=0&k=20&c=kUNncAVVzQEGnoEkAk0RZpfawjgH1tDx6gbIJ7St-cs=",
//     features: [
//       {
//         title: "CRM Integration",
//         image: "https://media.istockphoto.com/id/1361510800/photo/use-a-document-management-system-an-online-documentation-database-to-correctly-manage-files.webp?a=1&b=1&s=612x612&w=0&k=20&c=8svRN8p7yhgBrEKPBBl6zDBRjF1vOQhFHzOw_CDSkPA=",
//         description: "Automatically sync customer data, sales orders, and payments from CRM to Tally.",

//       },
//       {
//         title: "ERP Integration",
//         image: "https://media.istockphoto.com/id/1368145760/photo/businessman-using-a-computer-to-enterprise-resource-management-erp-software-system-for.jpg?s=612x612&w=0&k=20&c=EdpyXj1suyhtIkaPql2I4qGv8yNPeoMGW_Duwlw1U5k=",
//         description: "Connect ERP systems to transfer vouchers, inventory, and invoices",

//       },
//       {
//         title: "E-commerce Platforms",
//         image: "https://media.istockphoto.com/id/2268078057/photo/digital-marketers-manage-e-commerce-growth-using-online-shopping-technology-advertising.jpg?s=612x612&w=0&k=20&c=ana9JJXFo0RIcAAJ5ksrzN_0mb6-POp1t5KHz9aDvJw=",
//         description: "Auto-post orders, payments, and customer details from platforms like Shopify, WooCommerce,or Amazon into Tally.",

//       },
//       {
//         title: "Billing & POS Software",
//         image: "https://images.unsplash.com/photo-1647427017067-8f33ccbae493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmlsbGluZyUyMCUyNiUyMFBPUyUyMFNvZnR3YXJlfGVufDB8fDB8fHww",
//         description: "Sync sales bills, tax details, and payment entries from POS/billing software directly into Tally.",

//       },
//       {
//         title: "Payroll Software",
//         image: "https://media.istockphoto.com/id/2246330788/photo/financial-analyst-using-payroll-software.jpg?s=612x612&w=0&k=20&c=syWW24wdhbOdV3f45SPxOiV42GQUweY9mERA3Khg1Vs=",
//         description: "Integrate salary data, employee ledger entries, and TDS records into Tally from HR or payroll tools.",

//       },
//       {
//         title: "Inventory Management Tools",
//         image: "https://images.unsplash.com/photo-1648824572347-517357c9c44e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW52ZW50b3J5JTIwTWFuYWdlbWVudCUyMFRvb2xzfGVufDB8fDB8fHww",
//         description: " Update stock levels, item masters, and stock transfers into Tally from warehouse or inventory software.",

//       },
//       {
//         title: "Mobile Applications",
//         image: "https://plus.unsplash.com/premium_photo-1661410847282-d6af31c576a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwYXBwbGljYXRpb258ZW58MHx8MHx8fDA%3D",
//         description: " Push mobile app-generated sales, attendance, or expense data directly into Tally in real-time.",

//       },
//       {
//         title: "Custom Software Integration",
//         image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q3VzdG9tJTIwU29mdHdhcmUlMjBJbnRlZ3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
//         description: "Use API to connect any custom-developed application (desktop/web/mobile) for bi-directional Tally data sync.",

//       },

//     ]
//   },
//   {
//     id: "multi_settlement",
//     title: "Multi-Settlement With Auto Receipt",
//     banner: "https://media.istockphoto.com/id/2263538191/photo/close-up-of-receipt-printing-from-payment-terminal.jpg?s=612x612&w=0&k=20&c=8NB5q8bKoqkBMdPACp2qYsgOcNNdPwPcDCZP7h5JFE8=",
//     features: [
//       {
//         title: "Sales + Auto Receipt = One Step",
//         image: "https://plus.unsplash.com/premium_photo-1678139620956-cbd87b6ba3d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlsbHN8ZW58MHx8MHx8fDA%3D",
//         description: "You can create a sales invoice and receive payment in the same entry.",

//       },
//       {
//         title: "Multi Settlement During Sales",
//         image: "https://plus.unsplash.com/premium_photo-1661274094309-47d0a2dc80b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TXVsdGklMjBTZXR0bGVtZW50JTIwRHVyaW5nJTIwU2FsZXN8ZW58MHx8MHx8fDA%3D",
//         description: "System allows selecting previous outstanding bills and settling them automatically during Sales entry.",

//       },
//       {
//         title: "Supports All Payment Modes",
//         image: "https://plus.unsplash.com/premium_photo-1665203428051-b7cbaa73d8d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFN1cHBvcnRzJTIwQWxsJTIwUGF5bWVudCUyME1vZGVzfGVufDB8fDB8fHww",
//         description: "Accept payment via Cash, Bank, Cheque, UPI, NEFT, etc. at the time of sale.",

//       },
//       {
//         title: "No Need to Open Receipt Voucher Separately",
//         image: "https://images.unsplash.com/photo-1593871097805-09627f52f4bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fE5vJTIwTmVlZCUyMHRvJTIwT3BlbiUyMFJlY2VpcHQlMjBWb3VjaGVyJTIwU2VwYXJhdGVseXxlbnwwfHwwfHx8MA%3D%3D",
//         description: "Auto receipt voucher is created in the background when you save the sales entry",

//       },
//       {
//         title: "Payment Adjustment from Sales Screen",
//         image: "https://media.istockphoto.com/id/2208943527/photo/couple-using-tablet-and-credit-card-to-shop-online-through-e-commerce-app-making-payment-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=sWVWmV70Tm3dJgM9MfRkPMeFCts5t8Tuhy-eCYblWRs=",
//         description: "Easily select which past bills to settle using the payment being received.",

//       },
//       {
//         title: "Handles Full or Partial Payment",
//         image: "https://media.istockphoto.com/id/2266999342/photo/mobile-contactless-payment-with-smartphone-at-grocery-checkout-counter-using-card-reader.jpg?s=612x612&w=0&k=20&c=Y6TmfgPx-RtMcGGcs6y7fidY4BvLHKqw7Bnl6Y4bglI=",
//         description: "Even if only part of the amount is received, it will adjust it against multiple invoices as per rules",

//       },
//       {
//         title: "Party Outstanding Screen Pop-up",
//         image: "https://media.istockphoto.com/id/1386899314/photo/man-holding-on-an-invoice-note-receipt-financial.jpg?s=612x612&w=0&k=20&c=8XbMKgpY5GnLHzv8D8GqxU-gaYVT6aZU_nwo_ubyLho=",
//         description: "When payment is entered during sale, the system shows outstanding bills of the customer for easy selection.",

//       },
//       {
//         title: "Perfect for Counter Sales or Regular Customers",
//         image: "https://media.istockphoto.com/id/1484825666/photo/tracking-and-analyzing-competitor-data-drive-business-growth-effectively-business-leader-team.jpg?s=612x612&w=0&k=20&c=9Q5L50yhTdDz0BvxxU_fqfMKR-gIVPcX-PANlB8lJoY=",
//         description: "Great for businesses where sales and payment happen together (retail counters, B2B sales, etc.)",

//       },
//     ]
//   },
//   {
//     id: "jewellary_module",
//     title: " Jewellery",
//     banner: "https://images.unsplash.com/photo-1647312281540-47455957ee2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGpld2VsbGFyeV9tb2R1bGV8ZW58MHx8MHx8fDA%3D",
//     features: [
//       {
//         title: "Gold/Silver Sales & Purchase",
//         image: "https://plus.unsplash.com/premium_photo-1681276168422-ebd2d7e95340?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGpld2VsbGFyeV9tb2R1bGV8ZW58MHx8MHx8fDA%3D",
//         description: "Used to record buying and selling of gold and silver items.",
//         description1: "Captures details like item weight, purity (carat), rate per gram, and total value.",
//         description2: "Helps maintain accurate stock and accounts for precious metals."
//       },
//       {
//         title: "HUID Management",
//         image: "https://images.unsplash.com/photo-1680789526879-944b2b74b84a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGpld2VsbGFyeV9tb2R1bGV8ZW58MHx8MHx8fDA%3D",
//         description: "HUID means Hallmark Unique Identification Number for gold jewellery.",
//         description1: "This feature stores and tracks HUID numbers for each item.",
//         description2: "Ensures legal compliance and traceability of every gold piece."
//       },
//       {
//         title: ".Multiple Payment Options at Sales",
//         image: "https://images.unsplash.com/photo-1581522722022-802dd1ba55ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGpld2VsbGFyeV9tb2R1bGV8ZW58MHx8MHx8fDA%3D",
//         description: "Makes the billing process smooth and flexible",
//         description1: "Allows customer to pay using different methods in one bill (Cash, UPI, Card, Cheque, Old Gold).",
//         description3: "Helps in recording all types of payments properly."
//       },
//       {
//         title: "HUID Wise Barcode/QR Code Module",
//         image: "https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amV3ZWxsYXJ5X21vZHVsZXxlbnwwfHwwfHx8MA%3D%3D",
//         description: "Generates barcode or QR code for each jewellery item using HUID.",
//         description1: "When scanned, it shows item details – weight, purity, rate, and HUID.",
//         description2: "Increases speed and accuracy in billing and inventory."
//       },
//       {
//         title: ".Provision to Add Making Charges per Gram",
//         image: "https://images.unsplash.com/photo-1611170947204-5ab96c3e37a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amV3ZWxsYXJ5X21vZHVsZXxlbnwwfHwwfHx8MA%3D%3D",
//         description: "Adds making charges based on the weight of the jewellery item.",
//         description1: "Making charges are the labour cost of crafting the item.",
//         description2: "Final amount is calculated automatically during billing."
//       },
//       {
//         title: "Provision to Add URD Purchase While Sales",
//         image: "https://images.unsplash.com/photo-1759651038234-7b46fce068ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGpld2VsbGFyeV9tb2R1bGV8ZW58MHx8MHx8fDA%3D",
//         description: "URD means Unregistered Dealer (like old gold without bill).",
//         description1: "This feature lets you accept old gold from customers and adjust its value in the bill.",
//         description2: "Useful when customer exchanges old jewellery while buying new."
//       },
//       {
//         title: "HUID Wise In/Out Register",
//         image: "https://plus.unsplash.com/premium_photo-1674748385662-5594beffea9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGpld2VsbGFyeV9tb2R1bGV8ZW58MHx8MHx8fDA%3D",
//         description: "Helps in tracking item movement in the shop.",
//         description1: "Ensures full control, transparency, and stock accuracy"
//       },


//     ]
//   },
//   {
//     id: "share_market",
//     title: " Share Market ",
//     banner: "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U0hBUkUlMjBNQVJLRVQlMjBNT0RVTEV8ZW58MHx8MHx8fDA%3D",
//     features: [
//       {
//         title: "Share Accounting Management",
//         image: "https://images.unsplash.com/photo-1651341050677-24dba59ce0fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U0hBUkUlMjBNQVJLRVQlMjBNT0RVTEV8ZW58MHx8MHx8fDA%3D",
//         description: " Record buying, selling, and holding of shares directly in Tally.",
//         description1: "Works like regular business vouchers for easy investment management."
//       },
//       {
//         title: "Automatic Gain/Loss Calculation",
//         image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNIQVJFJTIwTUFSS0VUJTIwTU9EVUxFfGVufDB8fDB8fHww",
//         description: " Calculates gains or losses from share trades automatically.",
//         description1: " Reduces manual calculations and accounting errors."
//       },
//       {
//         title: "Capital Gain Reports",
//         image: "https://images.unsplash.com/photo-1734503937317-3b88a42ac50c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fFNIQVJFJTIwTUFSS0VUJTIwTU9EVUxFfGVufDB8fDB8fHww",
//         description: " Provides reports for short-term and long-term capital gains/losses.",
//         description1: "Helps users track investment performance clearly."
//       },
//       {
//         title: "Share Performance Monitoring",
//         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hhcmUlMjBQZXJmb3JtYW5jZSUyME1vbml0b3Jpbmd8ZW58MHx8MHx8fDA%3D",
//         description: "Monitor how each share is performing over time.",
//         description1: " Gives better visibility into investment growth."
//       },
//       {
//         title: " Individual Share-Wise Profit/Loss",
//         image: "https://images.unsplash.com/photo-1772413438617-937e44f2642e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SW5kaXZpZHVhbCUyMFNoYXJlLVdpc2UlMjBQcm9maXQlMkZMb3NzfGVufDB8fDB8fHww",
//         description: "Shows profit or loss for each individual share.",
//         description1: " Automatically identifies short-term and long-term gains/losses."
//       },
//       {
//         title: "Tax & Audit Support",
//         image: "https://images.unsplash.com/photo-1709880945165-d2208c6ad2ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGF4JTIwJTI2JTIwQXVkaXQlMjBTdXBwb3J0fGVufDB8fDB8fHww",
//         description: " Makes tax return preparation easier with separated gain reports.",
//         description1: "Useful during audits and financial reporting.",

//       },
//       {
//         title: "Automatic Profit & Loss Entries",
//         image: "https://images.unsplash.com/photo-1709534486708-fb8f94150d0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXV0b21hdGljJTIwUHJvZml0JTIwJTI2JTIwTG9zcyUyMEVudHJpZXN8ZW58MHx8MHx8fDA%3D",
//         description: "Automatically books Profit & Loss entries.",
//         description1: "Eliminates the need for manual voucher posting.",

//       },
//       {
//         title: "Accurate Voucher Creation",
//         image: "https://images.unsplash.com/photo-1631557776874-e39db672b62d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEFjY3VyYXRlJTIwVm91Y2hlciUyMENyZWF0aW9ufGVufDB8fDB8fHww",
//         description: "Uses buying and selling prices to calculate exact gains/losses.",
//         description1: "Creates correct accounting entries automatically."
//       },
//       {
//         title: "Reduced Posting Mistakes",
//         image: "https://images.unsplash.com/photo-1612342222980-e549ae573834?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVkdWNlZCUyMFBvc3RpbmclMjBNaXN0YWtlc3xlbnwwfHwwfHx8MA%3D%3D",
//         description: "Automatic entries reduce calculation and posting errors.",
//         description1: "Improves accounting accuracy."
//       },
//       {
//         title: "Share-Wise Stock Reports",
//         image: "https://media.istockphoto.com/id/171555377/photo/stock-market-data.webp?a=1&b=1&s=612x612&w=0&k=20&c=CcfS9gkBF1DviX1fu65XaAYPt18pHm8zMQq7G6MSs2g=",
//         description: "View movement and performance of specific shares.",
//         description1: "Track bought, sold, and held quantities easily."
//       },
//       {
//         title: "Detailed Share Movement Tracking",
//         image: "https://images.unsplash.com/photo-1580983693000-5654250f64d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RGV0YWlsZWQlMjBTaGFyZSUyME1vdmVtZW50JTIwVHJhY2tpbmd8ZW58MHx8MHx8fDA%3D",
//         description: " Shows entry date, quantity, and current position of shares.",
//         description1: " Helps maintain complete investment history."
//       },
//       {
//         title: "Combined Share Reports",
//         image: "https://images.unsplash.com/photo-1651341050677-24dba59ce0fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29tYmluZWQlMjBTaGFyZSUyMFJlcG9ydHN8ZW58MHx8MHx8fDA%3D",
//         description: "Generate combined reports of all shares in one place.",
//         description1: "Simplifies portfolio analysis and review."
//       }
//     ]
//   },
//   {
//     id: "doc_link",
//     title: "Document Linking System in tally Prime Using DLL",
//     banner: "https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fERvY3VtZW50JTIwTGlua2luZyUyMFN5c3RlbSUyMGluJTIwdGFsbHklMjBQcmltZSUyMFVzaW5nJTIwRExMfGVufDB8fDB8fHww",
//     features: [
//       {
//         title: "Share Accounting Management",
//         image: "https://media.istockphoto.com/id/1633896180/photo/analyst-working-with-computer-in-business-analytics-and-data-management-system-with-kpi-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=DNXAiFWd78dHc0rLoLAcb2lN4XHvazSzTn0shQh8BqI=",
//         description: " A Document Linking System allows users to link external files/documents (PDFs, images, Excel, etc.) to transactions or masters in Tally Prime. When implemented via a DLL, it adds enhanced functionality beyond standard TDL capabilities,including file system access and automation. TDL alone cannot perform file browsing, directory access, or launching documents.",

//       },
//       {
//         title: "It enables advanced actions like:",
//         image: "https://media.istockphoto.com/id/2207431187/photo/document-management-system-dms-enterprise-resource-planning-erp-document-workflow-sharing.jpg?s=612x612&w=0&k=20&c=0hiHytqii_NtyolGJJNg8rVIhnR6jS3_Ipk1oMSc_FA=",
//         description: " Opening file explorer, Attaching files to a voucher, Saving file paths in Tally fields, Opening files directly from Tally",

//       },
//       {
//         title: "Key Functionalities (via DLL Integration)",
//         image: "https://media.istockphoto.com/id/537548296/photo/businessman-touch-the-screen-and-select-doc-file.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xsr2L3qvXw6O79P2ci-WoAdUjev5ThsV_EmXS2ApVyc=",
//         description: " 1.Attach External Files – Browse and attach files to vouchers or ledgers. 2.Store File Path in Tally – File paths are saved in UDFs (User Defined Fields) in Tally. 3.One-Click File Access – Click a button in Tally to open the linked document via the DLL. 4.Multi-File Support – Link multiple files using a semicolon or list format. 5.Auto-Create Folders – DLL can create folders based on voucher numbers or dates.",

//       },
//       {
//         title: "Benefits of DLL-Based Document Linkin",
//         image: "https://media.istockphoto.com/id/2262019196/photo/document-management-and-network-system-concept-businessman-use-smart-tablet-loading-documents.webp?a=1&b=1&s=612x612&w=0&k=20&c=jNlPCvjCpJ61kB5A0iOoAtVKa3HKmtXNKlNEJtPXXac=",
//         description: "1.Seamless integration with the Windows file system. 2.Reduces manual effort and paperwork. 3.Quick access to linked documents for audit or reference. 4.Can automate folder structures (e.g., by voucher type, date). 5.Makes Tally more interactive and enterprise-ready.",

//       },
//     ]
//   },
//  {
//     id: "normal_pos",
//     title: "Normal Bill Printing to POS Bill Printing",
//      banner: "https://www.pospaper.com/cdn/shop/articles/image_fx__6_1200x1200.png?v=1727709720",
//     features: [
//       {
//         title: "Objective:",
//         image: "https://dcodeinternational.com/wp-content/uploads/2025/04/%E6%89%93%E5%8D%B0%E6%9C%BA1.jpg",
//          description: " To change the default normal sales invoice into a POS-style bill, with:Compact layout, Auto-print on save (optional), Barcode or QR code (optional), Thermal or small paper support, Fast billing with minimum input.",
      
//       },
//       {
//         title: "Summary of What You Get:",
//         image:"https://cdn.shopify.com/shopifycloud/help-center/manual/sell-in-person/hardware/receipt-printer/zero-ip-address.png",
//         description: "Small-sized POS print layout, Faster billing process, Optional auto print, Multiple payment options, Print logo, QR, or barcode, Suitable for petrol pump, retail, grocery.",
       
//       },
//     ]

//   },
//   {
//     id: "dairy_integration",
//     title: "Dairy Integration with Dairy Software Via API",
//     banner:"https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg",
//     features: [

//       {
//         title: "Milk Collection Entry",

//         image:
//           "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg",

//         description:
//           "Automatically record daily milk collection including quantity, fat, and SNF from farmers and sync data directly with Tally and dairy software.",
//       },

//       {
//         title: "Farmer Ledger Sync",

//         image:
//           "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",

//         description:
//           "Maintain real-time farmer account details including milk supply, advances, deductions, and balances seamlessly inside Tally.",
//       },

//       {
//         title: "Rate Chart Integration",

//         image:
//           "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",

//         description:
//           "Automatically sync fat and SNF based milk rates from dairy software to calculate farmer payments accurately.",
//       },

//       {
//         title: "Milk Testing Machine Integration",

//         image:
//           "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",

//         description:
//           "Fetch milk testing data like Fat and SNF directly from machines such as Lactoscan using API integration.",
//       },

//       {
//         title: "Auto Payment Entry",

//         image:
//           "https://images.pexels.com/photos/4386398/pexels-photo-4386398.jpeg",

//         description:
//           "Automatically generate payment entries in Tally after considering deductions, feed costs, loans, and advances.",
//       },

//       {
//         title: "Inventory Management",

//         image:
//           "data:image/jpeg;base64,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",

//         description:
//           "Manage feed stock, medicines, dairy products, and inventory movements between dairy software and Tally efficiently.",
//       },

//       {
//         title: "Sales & Purchase Invoice Integration",

//         image:
//           "https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg",

//         description:
//           "Automatically create and sync invoices for milk, paneer, curd, and other dairy products directly into Tally.",
//       },

//       {
//         title: "Feed Management",

//         image:
//           "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",

//         description:
//           "Track cattle feed distribution, monitor stock levels, and auto-adjust feed costs from farmer payments using API integration.",
//       },

//     ],

//   },
//   {
//     id: "recycle_bin",
//     title: "Recycle Bin Voucher Delete by Passwords",
//    banner: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
//     features: [

//       {
//         title: "Background Deletion Monitoring",

//         image:
//           "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",

//         description:
//           "Deleted vouchers are safely stored in Tally’s background recycle bin while remaining hidden from normal users for better security and control.",
//       },

//       {
//         title: "User Wise Recycle Bin Access Control",

//         image:
//           "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",

//         description:
//           "Allow only authorized users like Admin to access, view, or manage deleted vouchers inside the recycle bin.",
//       },

//       {
//         title: "Password Protection",

//         image:
//           "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",

//         description:
//           "Protect recycle bin access with password authentication to prevent accidental or unauthorized viewing of deleted voucher data.",
//       },

//       {
//         title: "Hide Recycle Bin Option",

//         image:
//           "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",

//         description:
//           "Hide the ‘Show Recycle Bin’ option from Day Book or voucher screens for restricted staff and billing operators.",
//       },

//       {
//         title: "Restore Permission Lock",

//         image:
//           "https://images.pexels.com/photos/5380596/pexels-photo-5380596.jpeg",

//         description:
//           "Users without restore permissions cannot recover deleted vouchers, ensuring complete protection against misuse or tampering.",
//       },

//       {
//         title: "Multi User Security Management",

//         image:
//           "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

//         description:
//           "Ideal for businesses with multiple Tally users including garment shops, retail counters, and accounting firms handling sensitive entries.",
//       },

//     ],

//   },
//   {
//     id: "material_requisition",
//     title: "Material Requisition",
//     banner:  "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg",
//     features: [

//       {
//         title: "Create Material Requisition Voucher",

//         image:
//           "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",

//         description:
//           "Create a dedicated Material Requisition voucher type in Tally to request materials from stores or warehouses just like Purchase or Sales vouchers.",
//       },

//       {
//         title: "Multi Item Requisition Entry",

//         image:
//           "https://www.investopedia.com/thmb/20nuKChMlKPeW3jGYzQdOcTr4_0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/requisition.asp_final-57e0abfc140942fe925e666f33444c46.png",

//         description:
//           "Request multiple stock items in a single voucher with quantity and location details to save time and reduce repetitive entries.",
//       },

//       {
//         title: "Date & Department Wise Requisition",

//         image:
//           "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

//         description:
//           "Track requisitions department-wise along with request dates for better internal consumption monitoring and accountability.",
//       },

//       {
//         title: "Pending Requisition Report",

//         image:
//           "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",

//         description:
//           "View all pending material requisitions in one report to ensure timely material issue and avoid operational delays.",
//       },

//       {
//         title: "Status Tracking",

//         image:
//           "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",

//         description:
//           "Track requisition status like Issued, Pending, or Partially Issued directly from reports for smarter decision-making and monitoring.",
//       },

//       {
//         title: "Link with Material Issue Voucher",

//         image:
//           "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg",

//         description:
//           "Link approved requisitions directly with Delivery Note or Stock Journal vouchers to maintain smooth inward and outward stock flow.",
//       },

//       {
//         title: "User Wise Entry Control",

//         image:
//           "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",

//         description:
//           "Allow only authorized users to create requisition entries, improving security, audit control, and operational responsibility.",
//       },

//       {
//         title: "Print Format with Approval Section",

//         image:
//           "https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg",

//         description:
//           "Generate clean printable requisition formats with department details, requested items, and approval signature sections for records and approvals.",
//       },

//     ],

//   },
//   {
//     id: "bulk_cost_adjustment",
//     title: "Random Bulk Cost Adjustment Entries",
//     banner:"https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg",
//     features: [

//       {
//         title: "Multiple Voucher Types Support",

//         image:
//           "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",

//         description:
//           "Create cost adjustment entries for Journal, Payment, Receipt, or custom voucher types with support for accounts-only and inventory-based adjustments.",
//       },

//       {
//         title: "Random Entry Generation",

//         image:
//           "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",

//         description:
//           "Generate random or fixed amount adjustment entries automatically with different dates or a common posting date for all entries.",
//       },

//       {
//         title: "Cost Centre & Ledger Flexibility",

//         image:
//           "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",

//         description:
//           "Allocate adjustments across multiple ledgers, projects, departments, and cost centres with complete flexibility and faster processing.",
//       },

//       {
//         title: "Advanced Smart Filters",

//         image:
//           "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",

//         description:
//           "Apply holiday filters, weekly off filters, and date-wise filters to control voucher generation and avoid unwanted adjustment entries.",
//       },

//       {
//         title: "GST & Tax Ledger Provision",

//         image:
//           "https://images.pexels.com/photos/4386371/pexels-photo-4386371.jpeg",

//         description:
//           "Select GST and tax ledgers during adjustments to ensure proper tax calculations and zero mismatch reporting accuracy.",
//       },

//       {
//         title: "Preview Before Posting",

//         image:
//           "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg",

//         description:
//           "Preview all generated adjustment entries before final posting to instantly verify, edit, and avoid incorrect accounting entries.",
//       },

//       {
//         title: "Automatic Voucher Posting",

//         image:
//           "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg",

//         description:
//           "Automatically create and post accounting vouchers for every adjustment without manual voucher entry work.",
//       },

//       {
//         title: "Speed & Accuracy",

//         image:
//           "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",

//         description:
//           "Handle thousands of bulk cost adjustment entries quickly while eliminating manual posting errors and improving operational accuracy.",
//       },

//     ],

//   },



// ];
