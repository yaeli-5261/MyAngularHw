import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon',
  standalone: true
})
export class IconPipe implements PipeTransform {

  private emojiMap: { [key: string]: string } = {
    tired:"😴",
    smile: "😊",
    sad: "😢",
    angry: "😠",
    love: "❤️",
    star: "⭐",
    fire: "🔥",
    music: "🎵",
    food: "🍎",
    sun: "☀️",
    moon: "🌙",
    thumbsUp: "👍",
    thumbsDown: "👎",
    party: "🎉",
    check: "✔️",
    cross: "❌",
    clock: "⏰",
    book: "📚",
    heart: "💖",
    globe: "🌍",
  };
  
  transform(text: string): string {
    return this.emojiMap[text]||'❓';
  }

}
