
import { Article, Category } from "../types";

export const categories: Category[] = [
  { id: "tech", name: "Technology" },
  { id: "travel", name: "Travel" },
  { id: "food", name: "Food & Cooking" },
  { id: "lifestyle", name: "Lifestyle" },
  { id: "health", name: "Health & Wellness" }
];

export const articles: Article[] = [
  {
    id: "1",
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
    content: `
      <p>The landscape of web development is constantly evolving, with new frameworks, libraries, and methodologies emerging regularly. In this article, we'll explore some of the most exciting trends and technologies that are shaping the future of web development.</p>
      
      <h2>The Rise of JAMstack</h2>
      <p>JAMstack (JavaScript, APIs, and Markup) has gained significant popularity in recent years. This architecture separates the frontend from the backend, allowing developers to build faster, more secure websites without the complexity of traditional server-side rendering.</p>
      
      <h2>WebAssembly: Bringing Performance to the Browser</h2>
      <p>WebAssembly (WASM) is revolutionizing browser-based applications by allowing code written in languages like C++, Rust, and Go to run at near-native speeds in the browser. This opens up new possibilities for web applications, from complex data visualizations to 3D games.</p>
      
      <h2>The Growing Importance of Accessibility</h2>
      <p>As the web becomes increasingly central to everyday life, making websites accessible to users of all abilities is more important than ever. From proper semantic HTML to advanced ARIA attributes, accessibility is becoming a core consideration in web development.</p>
      
      <p>The future of web development is bright, with new tools and technologies making it easier than ever to build fast, accessible, and user-friendly websites. By staying informed about these trends, developers can create better experiences for users and position themselves for success in an ever-changing industry.</p>
    `,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "tech",
    author: "Alex Johnson",
    date: "2023-04-15",
    readTime: "5 min read",
    comments: [
      { id: "c1", author: "Sarah Miller", content: "Great insights! I've been exploring WebAssembly recently and it's definitely a game-changer.", date: "2023-04-16" },
      { id: "c2", author: "Jason Thompson", content: "I'd love to see more examples of JAMstack in action. Any recommendations for resources?", date: "2023-04-17" }
    ]
  },
  {
    id: "2",
    title: "Exploring the Hidden Beaches of Thailand",
    excerpt: "Discover the most beautiful and secluded beaches that Thailand has to offer.",
    content: `
      <p>Thailand is renowned for its stunning beaches, but many visitors only experience the most popular and crowded destinations. In this guide, we'll take you off the beaten path to discover some of Thailand's most beautiful hidden beaches.</p>
      
      <h2>Railay Beach: A Climber's Paradise</h2>
      <p>Though technically a peninsula, Railay is only accessible by boat due to the high limestone cliffs cutting off mainland access. These same cliffs make Railay a world-class rock climbing destination, while its beaches offer powdery white sand and crystal-clear waters.</p>
      
      <h2>Freedom Beach: Phuket's Secret Gem</h2>
      <p>Despite being just a short distance from the bustling Patong Beach, Freedom Beach remains relatively untouched. Its 300-meter stretch of soft white sand is surrounded by thick jungle and clear turquoise waters, making it one of Phuket's most beautiful beaches.</p>
      
      <h2>Bamboo Island: A Day Tripper's Dream</h2>
      <p>Part of the Phi Phi Islands, Bamboo Island (Koh Pai) is a small, uninhabited island featuring a stunning beach with powder-soft sand. The island is surrounded by a coral reef, making it perfect for snorkeling enthusiasts.</p>
      
      <p>Thailand's hidden beaches offer a glimpse into paradise away from the crowds. Whether you're seeking adventure, relaxation, or the perfect Instagram shot, these secluded spots provide unforgettable experiences that go beyond the typical tourist trail.</p>
    `,
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    category: "travel",
    author: "Emma Wilson",
    date: "2023-03-28",
    readTime: "6 min read",
    comments: [
      { id: "c3", author: "Michael Chen", content: "Freedom Beach is truly a hidden gem. Visited last year and it was magical!", date: "2023-03-29" },
      { id: "c4", author: "Lisa Rodriguez", content: "Are these beaches accessible year-round? What's the best season to visit?", date: "2023-03-30" }
    ]
  },
  {
    id: "3",
    title: "The Art of Sourdough Bread Making",
    excerpt: "Master the techniques behind creating the perfect loaf of sourdough bread at home.",
    content: `
      <p>Sourdough bread has experienced a remarkable renaissance in recent years, with home bakers around the world discovering the joys and challenges of creating naturally leavened bread. In this comprehensive guide, we'll walk through the process of creating your own sourdough starter and baking the perfect loaf.</p>
      
      <h2>Creating Your Sourdough Starter</h2>
      <p>A sourdough starter is a living culture of wild yeasts and beneficial bacteria. To create your own, mix equal parts flour and water in a jar and leave it at room temperature. Feed it daily with fresh flour and water, discarding half the mixture each time. Within 7-10 days, your starter should be bubbling with activity and ready to use.</p>
      
      <h2>The Perfect Dough: Hydration and Flour Choice</h2>
      <p>The best sourdough bread begins with high-quality flour. Bread flour with a high protein content (12-14%) provides the gluten structure needed for a good rise and chewy texture. Hydration levels (the ratio of water to flour) typically range from 65% to 80%, with higher hydration producing more open crumb structures.</p>
      
      <h2>Mastering the Stretch and Fold</h2>
      <p>Rather than traditional kneading, sourdough benefits from a technique called "stretch and fold." During bulk fermentation, periodically stretch the dough and fold it over itself to develop gluten structure while preserving the delicate gas bubbles created by fermentation.</p>
      
      <p>Baking sourdough bread connects us to ancient traditions of fermentation and bread-making that span millennia of human history. While it requires patience and practice, the reward is a loaf with complex flavors, beautiful texture, and the satisfaction of having created something truly artisanal with your own hands.</p>
    `,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    category: "food",
    author: "David Park",
    date: "2023-02-10",
    readTime: "8 min read",
    comments: [
      { id: "c5", author: "Thomas Baker", content: "I've been struggling with getting an open crumb structure. Any tips on improving that specifically?", date: "2023-02-11" },
      { id: "c6", author: "Maria Garcia", content: "Just started my first sourdough starter following your instructions. Excited to see how it develops!", date: "2023-02-12" }
    ]
  },
  {
    id: "4",
    title: "Mindfulness Practices for Busy Professionals",
    excerpt: "Simple but effective mindfulness techniques that can be integrated into even the busiest schedules.",
    content: `
      <p>In today's fast-paced professional world, stress and burnout are increasingly common. Mindfulness practices offer a practical way to maintain mental wellbeing without requiring hours of meditation. This article explores simple techniques that busy professionals can integrate into their daily routines.</p>
      
      <h2>The One-Minute Breathing Exercise</h2>
      <p>Even the busiest schedule can accommodate a one-minute break. Set a timer and focus solely on your breath for 60 seconds. Breathe deeply into your abdomen, noticing the sensation of air moving in and out. This brief practice can reset your nervous system and improve focus before important meetings or tasks.</p>
      
      <h2>Mindful Transitions</h2>
      <p>Use transitions between activities as mindfulness opportunities. Before moving from one task to another, take three conscious breaths and set an intention for the next activity. This creates a mental boundary between tasks and prevents the stress of one situation from bleeding into the next.</p>
      
      <h2>Desktop Reminders</h2>
      <p>Place small objects on your desk that serve as mindfulness reminders. A smooth stone, a small plant, or even a written note can prompt you to pause and return to the present moment throughout your workday.</p>
      
      <p>Mindfulness isn't about adding another task to your to-do list; it's about bringing quality attention to what you're already doing. By incorporating these simple practices into your existing routine, you can experience greater calm, improved focus, and enhanced resilience—even in the most demanding professional environments.</p>
    `,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    category: "health",
    author: "Sophia Chen",
    date: "2023-01-22",
    readTime: "5 min read",
    comments: [
      { id: "c7", author: "Robert Johnson", content: "The desktop reminder tip has been a game-changer for me. I use a small hourglass that takes exactly 1 minute to empty.", date: "2023-01-23" },
      { id: "c8", author: "Jennifer Williams", content: "Do you have any recommendations for mindfulness apps that are good for beginners?", date: "2023-01-24" }
    ]
  },
  {
    id: "5",
    title: "Creating a Minimalist Home Office",
    excerpt: "Design tips for a clean, productive home workspace that enhances focus and creativity.",
    content: `
      <p>As remote work becomes increasingly common, the home office has transformed from a luxury to a necessity for many professionals. A minimalist approach to designing this space can significantly improve productivity, reduce stress, and create a more pleasant work environment. Here's how to create a minimalist home office that works for you.</p>
      
      <h2>Start With Purpose</h2>
      <p>Before purchasing furniture or décor, clarify exactly what you need from your workspace. Consider the type of work you do, how much storage you require, and any specific tools or equipment that must be accommodated. This clarity will prevent you from acquiring unnecessary items that contribute to clutter.</p>
      
      <h2>Invest in Quality Essentials</h2>
      <p>The minimalist philosophy emphasizes quality over quantity. Invest in a comfortable, ergonomic chair and a solid desk that suits your space. These two items will form the foundation of your office and directly impact your physical comfort during long workdays.</p>
      
      <h2>Cable Management</h2>
      <p>Nothing undermines a minimalist aesthetic faster than tangled cables. Use cable organizers, wireless peripherals when possible, and consider routing cables through desk grommets or dedicated management systems to maintain a clean, uncluttered look.</p>
      
      <p>A minimalist home office isn't about creating a sparse, uncomfortable environment—it's about thoughtfully curating a space that supports your work while eliminating distractions. By focusing on functionality, embracing negative space, and carefully selecting each element, you can create a workspace that not only looks beautiful but also enhances your daily work experience.</p>
    `,
    image: "https://images.unsplash.com/photo-1542053246726-a191c50f5eec",
    category: "lifestyle",
    author: "Marcus Reynolds",
    date: "2022-12-05",
    readTime: "7 min read",
    comments: [
      { id: "c9", author: "Amanda Cooper", content: "I implemented these tips last month and have noticed a significant improvement in my focus. Thanks for the inspiration!", date: "2022-12-06" },
      { id: "c10", author: "Daniel Lee", content: "Any specific recommendations for desk lamps that provide good lighting without taking up too much space?", date: "2022-12-07" }
    ]
  },
  {
    id: "6",
    title: "Essential JavaScript Frameworks in 2023",
    excerpt: "An overview of the most important JavaScript frameworks for modern web development.",
    content: `
      <p>JavaScript frameworks continue to evolve at a rapid pace, providing developers with powerful tools to build complex web applications. In 2023, several frameworks stand out for their performance, community support, and developer experience. Let's explore the essential JavaScript frameworks that are defining modern web development.</p>
      
      <h2>React: The Stable Foundation</h2>
      <p>React remains the most widely used JavaScript library for building user interfaces. Developed and maintained by Facebook, React's component-based architecture and virtual DOM provide an efficient way to build interactive UIs. With the introduction of React Server Components and continued improvements to React Hooks, it remains at the forefront of frontend development.</p>
      
      <h2>Vue.js: The Progressive Framework</h2>
      <p>Vue continues to gain popularity for its gentle learning curve and flexible integration options. Version 3 brought significant performance improvements through a rewritten core, Composition API, and better TypeScript support, making it an excellent choice for both small projects and enterprise applications.</p>
      
      <h2>Svelte: The Compiler Approach</h2>
      <p>Rather than using a virtual DOM, Svelte shifts much of its work to a compile step. This approach results in highly optimized vanilla JavaScript that updates the DOM directly, leading to exceptional performance and smaller bundle sizes. SvelteKit, the official framework for building Svelte applications, has reached maturity and provides an excellent developer experience.</p>
      
      <p>Choosing the right JavaScript framework depends on your specific project requirements, team expertise, and long-term maintenance considerations. Each of these frameworks offers unique advantages, and understanding their strengths will help you make an informed decision for your next web development project.</p>
    `,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "tech",
    author: "Alex Johnson",
    date: "2023-05-18",
    readTime: "6 min read",
    comments: [
      { id: "c11", author: "Rachel Green", content: "What are your thoughts on Next.js vs. Remix for React-based applications?", date: "2023-05-19" },
      { id: "c12", author: "Chris Martin", content: "I've been using Svelte for the past year and completely agree with your assessment. The compiler approach is really a game-changer.", date: "2023-05-20" }
    ]
  }
];
