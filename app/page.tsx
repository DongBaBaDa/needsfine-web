"use client";

import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  TrendingUp,
  Brain,
  CheckCircle,
  Sparkles,
  XCircle,
  ArrowRight,
  Award
} from 'lucide-react';
import { Button } from "../components/ui/button";

const slides = [
  { id: 1, type: 'intro', bgGradient: 'from-blue-600 via-purple-700 to-indigo-800' },
  { id: 2, type: 'review-example', bgGradient: 'from-emerald-500 via-teal-600 to-cyan-700' },
  { id: 3, type: 'revival-example', bgGradient: 'from-amber-500 via-orange-600 to-red-600' },
  { id: 4, type: 'features', bgGradient: 'from-purple-500 via-indigo-600 to-blue-700' },
];

function SlideContent({ type }: { type: string }) {
  switch (type) {
    case "intro":
      return (
        <div className="min-h-screen flex items-center justify-center text-white px-12 py-16">
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl w-full">
            <div className="flex flex-col items-center justify-center">
              <div className="mb-6 relative inline-block">
                <Shield className="w-32 h-32 animate-pulse" />
                <Sparkles className="w-12 h-12 absolute -top-2 -right-2 text-yellow-300" />
              </div>
              <h1 className="text-6xl mb-4">NEEDSFINE</h1>
              <p className="text-3xl mb-4">니즈파인</p>
              <div className="w-24 h-1 bg-white mb-6"></div>
              <p className="text-2xl text-center opacity-90">
                여러분과 함께하는<br />맛집 검증 시스템
              </p>
            </div>

            <div className="flex flex-col justify-center space-y-10">
              <div>
                <h2 className="text-3xl mb-6 text-center">😤 이런 경험 있으신가요?</h2>
                <div className="space-y-3">
                  {[
                    ["⭐⭐⭐⭐⭐ \"최고예요!\"", "→ 가보니 실망..."],
                    ["🤖 사장님이 쓴 것 같은 리뷰", "→ 어뷰징 의심"],
                    ["📝 너무 짧거나 성의 없는 리뷰", "→ 신뢰도 제로"],
                  ].map(([title, desc], i) => (
                    <div
                      key={i}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform hover:scale-105 transition-transform"
                    >
                      <p className="text-lg mb-1">{title}</p>
                      <p className="opacity-75">{desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xl mt-6 text-center animate-pulse">
                  가짜 5점 리뷰의 시대는 끝났습니다
                </p>
              </div>

              <div>
                <div className="flex justify-center mb-4">
                  <Brain className="w-16 h-16 animate-bounce" />
                </div>
                <h2 className="text-3xl mb-4 text-center">니즈파인이 해결합니다</h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6">
                  {[
                    ["가짜 5점 리뷰", "걸러냄"],
                    ["어뷰징", "탐지"],
                    ["신뢰할 수 있는", "진짜 점수 제공"],
                  ].map(([h, d], i) => (
                    <div key={i} className="flex items-start gap-3 mb-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                      <p>
                        <span className="text-yellow-300">{h}</span> {d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "review-example":
      return (
        <div className="min-h-screen flex items-center justify-center text-white px-12 py-16">
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl mb-10 text-center">리뷰 계산 예시</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* 낮은 신뢰도 */}
              <div className="bg-red-500/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-red-400">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="w-10 h-10 text-red-400" />
                  <h3 className="text-3xl">낮은 신뢰도</h3>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 mb-6">
                  <p className="text-xl mb-3">⭐⭐⭐⭐⭐ 5.0점</p>
                  <p className="text-lg opacity-90">"맛있어요"</p>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    ["리뷰 퀄리티", "짧고 성의 없음", "w-1/4"],
                    ["긍정 일치도", "태그 일치 없음", "w-1/5"],
                  ].map(([t, d, w], i) => (
                    <div key={i} className="bg-white/10 rounded-xl p-4">
                      <p className="text-sm opacity-75 mb-1">{t}</p>
                      <p className="text-lg">❌ {d}</p>
                      <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                        <div className={`bg-red-400 h-2 rounded-full ${w}`}></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-red-400/30 rounded-xl p-5 text-center">
                  <p className="text-sm opacity-75 mb-1">신뢰도 총점</p>
                  <p className="text-3xl">0.82</p>
                  <ArrowRight className="w-6 h-6 mx-auto my-3" />
                  <p className="text-sm opacity-75 mb-1">최종 점수</p>
                  <p className="text-4xl text-red-300">4.1점</p>
                </div>
              </div>

              {/* 높은 신뢰도 */}
              <div className="bg-green-500/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-green-400">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                  <h3 className="text-3xl">높은 신뢰도</h3>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 mb-6">
                  <p className="text-xl mb-3">⭐⭐⭐⭐ 4.0점</p>
                  <p className="text-lg opacity-90">
                    "분위기가 조용하고 아늑해서 좋았어요..."
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    ["리뷰 퀄리티", "구체적이고 상세함", "w-4/5"],
                    ["긍정 일치도", "조용 / 맛있 / 친절", "w-5/6"],
                  ].map(([t, d, w], i) => (
                    <div key={i} className="bg-white/10 rounded-xl p-4">
                      <p className="text-sm opacity-75 mb-1">{t}</p>
                      <p className="text-lg">✅ {d}</p>
                      <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                        <div className={`bg-green-400 h-2 rounded-full ${w}`}></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-green-400/30 rounded-xl p-5 text-center">
                  <p className="text-sm opacity-75 mb-1">신뢰도 총점</p>
                  <p className="text-3xl">0.96</p>
                  <ArrowRight className="w-6 h-6 mx-auto my-3" />
                  <p className="text-sm opacity-75 mb-1">최종 점수</p>
                  <p className="text-4xl text-green-300">3.84점</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <p className="text-2xl">
                💡 <span className="text-yellow-300">진짜 좋은 리뷰</span>가 더 높은 신뢰도를 받습니다!
              </p>
            </div>
          </div>
        </div>
      );

    case "revival-example":
      return (
        <div className="min-h-screen text-white px-12 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl mb-10 text-center">패자부활전 시스템 🔥</h2>

            <div className="bg-white/10 rounded-3xl p-8 mb-8">
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-2xl p-6 mb-8">
                <p className="text-2xl text-center mb-3">⚖️ 공정성 원칙</p>
                <p className="text-xl text-center">
                  <span className="text-yellow-300">NeedsFine 점수는 조작되지 않습니다</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    case "features":
      return (
        <div className="min-h-screen text-white px-12 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl mb-10 text-center">핵심 기능</h2>

            <div className="bg-white/10 rounded-3xl p-8 mb-10">
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp className="w-16 h-16" />
                <h3 className="text-3xl">패자부활전 시스템 🔥</h3>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
              <Award className="w-20 h-20 mx-auto mb-6 text-yellow-300" />
              <h3 className="text-4xl mb-6">진짜 맛집만 남습니다</h3>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-900">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-500 ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            <div
              className={`h-full w-full overflow-y-auto bg-gradient-to-br ${slide.bgGradient}`}
            >
              <SlideContent type={slide.type} />
            </div>
          </div>
        ))}

        {/* Prev */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition rounded-full ${
                index === currentSlide
                  ? "bg-white w-12 h-3"
                  : "bg-white/40 w-3 h-3"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
"test123" 
