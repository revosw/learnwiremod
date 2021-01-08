export default function(ctx) {
    const preElement = ctx.block.parentElement;
    if (preElement instanceof HTMLParagraphElement) return;
    
    const clipboard = document.createElement("span");
    clipboard.innerText = "📋";
    clipboard.style.cursor = "pointer"
    clipboard.onclick = () => navigator.clipboard.writeText(ctx.block.innerText);
    preElement.appendChild(clipboard)
}