import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import MarkdownIt from 'markdown-it';
import './style.css';
const form = document.querySelector('form');
const promptInput = document.querySelector('input[name="prompt"]');
const backgroundStyleSelect = document.querySelector('select[name="background-style"]');
const showcaseOutput = document.getElementById('showcase-output');

form.onsubmit = async (ev) => {
  ev.preventDefault();
  showcaseOutput.innerHTML = '<p class="text-xl font-bold">Generating...</p>';

    try {
      const prompt = `Create a website style showcase based on the theme: "${promptInput.value}". 

      Background style: ${backgroundStyleSelect.value} This is the most important part do not ignore this if it conflicts with the template provided then simplify to match the style requested. Referring the the Background Styling below based on what this says.
    
      Create a unique, theme-appropriate hover effect for the navbar links.
    
      Ensure that text, navbar, and buttons always contrast with the chosen background. There should always be 2 buttons and a input style field.
      
      Priotize Tailwind for buttons to make them really stand out with good hover effects, use custom css if you can achieve a similar result.
    
      **Background Style Requirements:**
    
      * **Detailed:**
          * Create a visually captivating background using pure CSS.
          * Include at least one of the following effects, tailored to the theme:
              * Parallax scrolling elements 
              * Subtle animations (e.g., falling leaves, twinkling stars, flowing water, etc.)
              * CSS-generated shapes or patterns
              * Gradients with multiple colors or subtle transitions
          * Ensure the animation is looping and smooth.
          * Never use plain gradients or simple color backgrounds for this option.
    
      * **Gradient:** 
          * Use a gradient background with at least two colors.
          * Consider using subtle color transitions or radial gradients for visual interest.
          * Do not include any animations for this option.
    
      * **Plain:**
          * Use a single, solid color for the background.
          * Do not add any additional effects or gradients for this option.
    
      **General Guidelines:**
    
      * Never use images that have to be added to the project; it should always be pure CSS unless online resources/CSS backgrounds have usable online images to copy in without it needing to be present. 
    
      Provide the full HTML and CSS code in the same file go. CSS should be in a <style> tag and ensure Tailwind is properly added using script src="https://cdn.tailwindcss.com"></script> It should be Cody Only with no explanations or summaries. 
    
      Use this layout as a reference, but adapt it to the theme (No direct copying of things like navbar names etc):
      <body class="bg-black p-8 shadow-md relative overflow-hidden">
        <div class="stars absolute inset-0"></div>
        <div class="halo-ring absolute inset-0 flex items-center justify-center">
          <div class="ring"></div>
        </div>
        <nav class="mb-6 relative z-10">
          <ul class="flex space-x-4 font-halo text-lg">
            <li><a href="#" class="text-blue-300 hover:text-white transition-colors duration-300 relative group">
              Earth
              <span class="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
            </a></li>
            <li><a href="#" class="text-blue-300 hover:text-white transition-colors duration-300 relative group">
              Reach
              <span class="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
            </a></li>
            <li><a href="#" class="text-blue-300 hover:text-white transition-colors duration-300 relative group">
              Installation 04
              <span class="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
            </a></li>
          </ul>
        </nav>
      
        <div class="space-y-6 relative z-10">
          <h2 class="text-3xl font-halo font-bold mb-4 text-white">Halo Style Showcase</h2>
        
          <div class="flex space-x-4">
            <button class="bg-blue-900 text-white px-6 py-2 font-halo border border-blue-700 shadow-lg hover:bg-blue-800 transition-colors duration-300">
              Deploy
            </button>
          
            <button class="bg-blue-800 text-white px-6 py-2 font-halo border border-blue-700 shadow-lg hover:bg-blue-700 transition-colors duration-300">
              Engage
            </button>
          </div>
        
          <div class="bg-blue-900 bg-opacity-50 p-4 border border-blue-700 shadow-lg">
            <p class="font-halo text-blue-300">Wake me... when you need me.</p>
          </div>
        
          <div class="flex items-center space-x-2">
            <input type="text" placeholder="Enter your Spartan name" class="border border-blue-700 bg-blue-900 bg-opacity-50 p-2 w-64 font-halo text-blue-300 placeholder-blue-400">
            <button class="bg-blue-800 text-white px-4 py-2 font-halo border border-blue-700 shadow-lg hover:bg-blue-700 transition-colors duration-300">
              Join UNSC
            </button>
          </div>
        </div>
      </body>

      Here's an example of a CSS trick for a starry background with a pulsing ring:

      <style>
      @font-face {
        font-family: 'Halo';
        src: url('/fonts/halo.woff2') format('woff2');
      }

      .font-halo {
        font-family: 'Halo', sans-serif;
      }

      .stars {
        background-image: radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
        background-repeat: repeat;
        background-size: 200px 200px;
        animation: twinkle 5s infinite;
      }

      @keyframes twinkle {
        0% { opacity: 0.5; }
        50% { opacity: 1; }
        100% { opacity: 0.5; }
      }

      .halo-ring {
        pointer-events: none;
      }

      .ring {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        border: 30px solid #708090; /* Steel color */
        box-shadow: 0 0 50px #4169E1, inset 0 0 50px #4169E1; /* Blue glow */
        animation: pulse 4s infinite;
      }

      @keyframes pulse {
        0% {
          box-shadow: 0 0 50px #4169E1, inset 0 0 50px #4169E1;
        }
        50% {
          box-shadow: 0 0 100px #4169E1, inset 0 0 100px #4169E1;
        }
        100% {
          box-shadow: 0 0 50px #4169E1, inset 0 0 50px #4169E1;
        }
      }
      </style>`;
  
    const model = new ChatGoogleGenerativeAI({
      modelName: 'gemini-1.5-pro',
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ],
    });

    const result = await model.invoke(prompt);

    const md = new MarkdownIt();
    const renderedContent = md.render(result.content);

    showcaseOutput.innerHTML = `
      <div class="mb-4">
        <div class="flex mb-2">
          <button id="preview-tab" class="px-4 py-2 font-bold border-2 border-black bg-blue-500 text-white">Preview</button>
          <button id="code-tab" class="px-4 py-2 font-bold border-2 border-l-0 border-black bg-gray-200">Code</button>
        </div>
        <div id="preview-content">
          <h2 class="text-2xl font-bold mb-2">Generated Showcase:</h2>
          <iframe id="showcase-preview" class="border-2 border-black p-4 mb-4" style="width: 100%; height: 500px;"></iframe>
        </div>
        <div id="code-content" class="hidden">
          <h3 class="text-xl font-bold mb-2">Generated Code:</h3>
          <pre class="bg-gray-100 p-4 overflow-x-auto"><code>${escapeHtml(result.content)}</code></pre>
        </div>
        <button id="copy-code" class="bg-blue-500 text-white px-4 py-2 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
          Copy Code
        </button>
      </div>
    `;
    const showcasePreview = document.getElementById('showcase-preview');
    const extractedHtml = extractHtmlFromMarkdown(result.content);

    // Set the iframe's content
    showcasePreview.srcdoc = extractedHtml;

    // Adjust iframe height after content loads
    showcasePreview.onload = () => {
      const iframeDocument = showcasePreview.contentDocument || showcasePreview.contentWindow.document;
      const iframeBody = iframeDocument.body;
      
      // Set a minimum height and then adjust based on content
      showcasePreview.style.height = '500px';
      const newHeight = Math.max(500, iframeBody.scrollHeight);
      showcasePreview.style.height = `${newHeight}px`;
      
      // Ensure styles are applied
      const styles = iframeDocument.createElement('style');
      styles.textContent = `body { margin: 0; padding: 0; }`;
      iframeDocument.head.appendChild(styles);
    };
      
    const copyCodeButton = document.getElementById('copy-code');
    copyCodeButton.addEventListener('click', () => {
      navigator.clipboard.writeText(result.content).then(() => {
        alert('Code copied to clipboard!');
      });
    });

    const previewTab = document.getElementById('preview-tab');
    const codeTab = document.getElementById('code-tab');
    const previewContent = document.getElementById('preview-content');
    const codeContent = document.getElementById('code-content');

    previewTab.addEventListener('click', () => {
      previewTab.classList.add('bg-blue-500', 'text-white');
      previewTab.classList.remove('bg-gray-200');
      codeTab.classList.add('bg-gray-200');
      codeTab.classList.remove('bg-blue-500', 'text-white');
      previewContent.classList.remove('hidden');
      codeContent.classList.add('hidden');
    });

    codeTab.addEventListener('click', () => {
      codeTab.classList.add('bg-blue-500', 'text-white');
      codeTab.classList.remove('bg-gray-200');
      previewTab.classList.add('bg-gray-200');
      previewTab.classList.remove('bg-blue-500', 'text-white');
      codeContent.classList.remove('hidden');
      previewContent.classList.add('hidden');
    });

  } catch (e) {
    showcaseOutput.innerHTML += '<hr>' + e;
  }
};
function extractHtmlFromMarkdown(markdown) {
  // Remove markdown code block delimiters
  const cleanedMarkdown = markdown.replace(/\n|/g, '');
  
  // Extract everything between <html> tags, including the tags themselves
  const htmlRegex = /(<html[\s\S]*<\/html>)/;
  const htmlMatch = cleanedMarkdown.match(htmlRegex);
  
  return htmlMatch ? htmlMatch[1] : cleanedMarkdown;
}


function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


// You can delete this once you've filled out an API keymaybeShowApiKeyBanner(process.env.GOOGLE_API_KEY, `enter it in your <code>.env</code> file.`);
