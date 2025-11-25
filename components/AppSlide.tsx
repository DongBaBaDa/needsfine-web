import { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, TrendingUp, Brain, CheckCircle, Sparkles, Search, Award, XCircle, ArrowRight } from 'lucide-react';
import { Button } from './components/ui/button';

const slides = [
  {
    id: 1,
    type: 'intro',
    bgGradient: 'from-blue-600 via-purple-700 to-indigo-800',
  },
  {
    id: 2,
    type: 'review-example',
    bgGradient: 'from-emerald-500 via-teal-600 to-cyan-700',
  },
  {
    id: 3,
    type: 'revival-example',
    bgGradient: 'from-amber-500 via-orange-600 to-red-600',
  },
  {
    id: 4,
    type: 'features',
    bgGradient: 'from-purple-500 via-indigo-600 to-blue-700',
  },
];

function SlideContent({ type }: { type: string }) {
  switch (type) {
    case 'intro':
      return (
        <div className="flex items-center justify-center h-full text-white px-12 py-16 overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl w-full">
            {/* Left: Cover Section */}
            <div className="flex flex-col items-center justify-center">
              <div className="mb-6 relative inline-block">
                <Shield className="w-32 h-32 animate-pulse" />
                <Sparkles className="w-12 h-12 absolute -top-2 -right-2 text-yellow-300" />
              </div>
              <h1 className="text-6xl mb-4">
                NEEDSFINE
              </h1>
              <p className="text-3xl mb-4">니즈파인</p>
              <div className="w-24 h-1 bg-white mb-6"></div>
              <p className="text-2xl text-center opacity-90">
                여러분과 함께하는<br />맛집 검증 시스템
              </p>
            </div>

            {/* Right: Problem + Solution Section */}
            <div className="flex flex-col justify-center space-y-10">
              {/* Problem Section */}
              <div>
                <h2 className="text-3xl mb-6 text-center">
                  😤 이런 경험 있으신가요?
                </h2>
                <div className="space-y-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform hover:scale-105 transition-transform">
                    <p className="text-lg mb-1">⭐⭐⭐⭐⭐ "최고예요!"</p>
                    <p className="opacity-75">→ 가보니 실망...</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform hover:scale-105 transition-transform">
                    <p className="text-lg mb-1">🤖 "사장님이 쓴 것 같은 리뷰"</p>
                    <p className="opacity-75">→ 어뷰징 의심</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform hover:scale-105 transition-transform">
                    <p className="text-lg mb-1">📝 "너무 짧거나 성의 없는 리뷰"</p>
                    <p className="opacity-75">→ 신뢰도 제로</p>
                  </div>
                </div>
                <p className="text-xl mt-6 text-center animate-pulse">
                  가짜 5점 리뷰의 시대는 끝났습니다
                </p>
              </div>

              {/* Solution Section */}
              <div>
                <div className="flex justify-center mb-4">
                  <Brain className="w-16 h-16 animate-bounce" />
                </div>
                <h2 className="text-3xl mb-4 text-center">
                  니즈파인이 해결합니다
                </h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6">
                  <p className="text-lg mb-4 text-center">
                    NeedsFine의 로직을 활용해
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                      <p>
                        <span className="text-yellow-300">가짜 5점 리뷰</span>를 걸러내고
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                      <p>
                        <span className="text-yellow-300">어뷰징</span>을 탐지하며
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                      <p>
                        <span className="text-yellow-300">신뢰할 수 있는</span> 진짜 맛집 점수만 제공합니다
                      </p>
                    </div>
                  </div>
                  <p className="text-lg mt-4 text-center opacity-90">
                    🔍 더 이상 속지 마세요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'review-example':
      return (
        <div className="flex items-center justify-center h-full text-white px-12 py-16 overflow-y-auto">
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl mb-10 text-center">리뷰 계산 예시</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Bad Review Example */}
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
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-sm opacity-75 mb-1">리뷰 퀄리티</p>
                    <p className="text-lg">❌ 짧고 성의 없음</p>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                      <div className="bg-red-400 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-sm opacity-75 mb-1">긍정 일치도</p>
                    <p className="text-lg">❌ 태그 일치 없음</p>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                      <div className="bg-red-400 h-2 rounded-full w-1/5"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-400/30 rounded-xl p-5 text-center">
                  <p className="text-sm opacity-75 mb-1">신뢰도 총점</p>
                  <p className="text-3xl">0.82</p>
                  <div className="my-3">
                    <ArrowRight className="w-6 h-6 mx-auto" />
                  </div>
                  <p className="text-sm opacity-75 mb-1">최종 점수</p>
                  <p className="text-4xl text-red-300">4.1점</p>
                </div>
              </div>

              {/* Good Review Example */}
              <div className="bg-green-500/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-green-400">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                  <h3 className="text-3xl">높은 신뢰도</h3>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 mb-6">
                  <p className="text-xl mb-3">⭐⭐⭐⭐ 4.0점</p>
                  <p className="text-lg opacity-90">"분위기가 조용하고 아늑해서 좋았어요. 음식도 정갈하고 맛있었고, 사장님도 친절하셔서 편하게 식사했습니다."</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-sm opacity-75 mb-1">리뷰 퀄리티</p>
                    <p className="text-lg">✅ 구체적이고 상세함</p>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                      <div className="bg-green-400 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-sm opacity-75 mb-1">긍정 일치도</p>
                    <p className="text-lg">✅ 조용, 맛있, 친절 일치</p>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                      <div className="bg-green-400 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-400/30 rounded-xl p-5 text-center">
                  <p className="text-sm opacity-75 mb-1">신뢰도 총점</p>
                  <p className="text-3xl">0.96</p>
                  <div className="my-3">
                    <ArrowRight className="w-6 h-6 mx-auto" />
                  </div>
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

    case 'revival-example':
      return (
        <div className="flex items-center justify-center h-full text-white px-12 py-16 overflow-y-auto">
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl mb-10 text-center">패자부활전 시스템 🔥</h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-2xl p-6 mb-8">
                <p className="text-2xl text-center mb-3">⚖️ 공정성 원칙</p>
                <p className="text-xl text-center">
                  <span className="text-yellow-300">NeedsFine 점수는 절대 조작하지 않습니다!</span>
                </p>
                <p className="text-lg text-center opacity-90 mt-2">
                  대신, 최근 개선된 매장을 <span className="text-green-300">"NeedsFine Top"</span>에서 별도 노출합니다
                </p>
              </div>

              <h3 className="text-3xl mb-6 text-center">실제 사례: 맛있는 집</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* NeedsFine Score (Unchanged) */}
                <div className="bg-blue-500/20 rounded-2xl p-6 border-2 border-blue-400">
                  <div className="text-center mb-6">
                    <p className="text-2xl mb-2">📊 NeedsFine 점수</p>
                    <p className="text-lg opacity-75 mb-4">(공정하게 계산됨)</p>
                    <p className="text-5xl text-blue-300">3.2점</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="opacity-75">전체 리뷰 평균</p>
                      <p className="text-xl">3.2점</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="opacity-75">신뢰도 검증</p>
                      <p className="text-xl">정확하게 반영</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="opacity-75">꾸준히 관리한 매장</p>
                      <p className="text-xl text-green-300">억울하지 않음 ✅</p>
                    </div>
                  </div>
                </div>

                {/* Revival Bonus (Separate Exposure) */}
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-6 border-2 border-orange-400">
                  <div className="text-center mb-6">
                    <p className="text-2xl mb-2">🔥 패자부활전 혜택</p>
                    <p className="text-lg opacity-75 mb-4">(별도 노출 기회)</p>
                    <p className="text-3xl text-orange-300 mb-2">NeedsFine Top</p>
                    <p className="text-xl text-yellow-300">광고 노출! 🎯</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="opacity-75">최근 30일 평균</p>
                      <p className="text-xl text-green-300">4.6점 ⬆️</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="opacity-75">상승률</p>
                      <p className="text-xl text-orange-300">🔥 1.3배 Surge!</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="opacity-75">혜택</p>
                      <p className="text-xl text-yellow-300">Top 섹션 노출</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How it Works */}
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6">
                <p className="text-2xl mb-4 text-center">📱 사용자 화면 예시</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-lg mb-2">🏆 NeedsFine 베스트</p>
                    <p className="opacity-75">→ 꾸준히 높은 점수 매장</p>
                    <p className="text-green-300">4.5점 이상 매장들</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-lg mb-2">🔥 패자부활전 (급상승)</p>
                    <p className="opacity-75">→ 최근 개선된 매장</p>
                    <p className="text-orange-300">"맛있는 집" 여기 노출!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <p className="text-4xl mb-3">⚖️</p>
                <p className="text-xl mb-2">공정한 점수</p>
                <p className="opacity-75">조작 없는 계산</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <p className="text-4xl mb-3">🔥</p>
                <p className="text-xl mb-2">별도 노출</p>
                <p className="opacity-75">개선 매장 기회</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <p className="text-4xl mb-3">✅</p>
                <p className="text-xl mb-2">Win-Win</p>
                <p className="opacity-75">모두에게 공정</p>
              </div>
            </div>
          </div>
        </div>
      );

    case 'features':
      return (
        <div className="flex flex-col items-center justify-start h-full text-white px-12 py-16 overflow-y-auto">
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl mb-10 text-center">핵심 기능</h2>

            {/* Tech 1: Review Quality */}
            <div className="mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">1️⃣</span>
                  </div>
                  <h3 className="text-3xl">리뷰 퀄리티 분석</h3>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <p className="text-lg opacity-90 mb-2">
                    💡 짧고 성의 없는 리뷰는 낮은 점수
                  </p>
                  <p className="text-lg opacity-90">
                    💡 구체적이고 상세한 리뷰는 높은 점수
                  </p>
                </div>
              </div>
            </div>

            {/* Tech 2: Match */}
            <div className="mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">2️⃣</span>
                  </div>
                  <h3 className="text-3xl">긍정 일치도 검증</h3>
                </div>
                <p className="text-xl mb-4">
                  매장 등록 태그와 리뷰 내용의 긍정 일치도 계산
                </p>
                <div className="bg-white/10 rounded-2xl p-6">
                  <p className="text-lg mb-2">
                    🏷️ 매장 태그: "조용", "맛있", "친절"
                  </p>
                  <p className="text-lg mb-2">
                    📝 리뷰: "조용하고 음식이 맛있어요"
                  </p>
                  <p className="text-lg text-green-300">
                    ✅ 높은 일치도 = 신뢰도 UP
                  </p>
                </div>
              </div>
            </div>

            {/* Revival System */}
            <div className="mb-10">
              <div className="bg-gradient-to-r from-amber-500/20 to-orange-600/20 backdrop-blur-sm rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <TrendingUp className="w-16 h-16 flex-shrink-0" />
                  <h3 className="text-3xl">패자부활전 시스템 🔥</h3>
                </div>
                <p className="text-xl mb-6">과거 실수도 극복 가능!</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-2xl p-5">
                    <p className="text-lg mb-2">📊 최근 4.6점</p>
                    <p className="opacity-75">최근 리뷰 트렌드 추적</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-5">
                    <p className="text-lg mb-2">🔥 1.3배 Surge!</p>
                    <p className="opacity-75">급상승 맛집 발견</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-5">
                    <p className="text-lg mb-2">📈 계기판 시스템</p>
                    <p className="opacity-75">개선 노력 증명</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
              <Award className="w-20 h-20 mx-auto mb-6 text-yellow-300" />
              <h3 className="text-4xl mb-6">진짜 맛집만 남습니다</h3>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-4xl mb-2">🤖</p>
                  <p className="text-lg">AI 탐정</p>
                </div>
                <div>
                  <p className="text-4xl mb-2">✅</p>
                  <p className="text-lg">신뢰도 검증</p>
                </div>
                <div>
                  <p className="text-4xl mb-2">📊</p>
                  <p className="text-lg">정밀 분석</p>
                </div>
                <div>
                  <p className="text-4xl mb-2">🔥</p>
                  <p className="text-lg">실시간 추적</p>
                </div>
              </div>
              <p className="text-2xl text-yellow-300 mb-3">NEEDSFINE</p>
              <p className="text-lg opacity-90 mb-6">
                가짜 리뷰 없는 세상을 만듭니다
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 text-xl">
                  시작하기
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-xl">
                  더 알아보기
                </Button>
              </div>
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-900">
      {/* Slide Container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-500 ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className={`h-full w-full bg-gradient-to-br ${slide.bgGradient}`}>
              <SlideContent type={slide.type} />
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-3 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-3 trasition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                index === currentSlide
                  ? 'bg-white w-12 h-3'
                  : 'bg-white/40 hover:bg-white/60 w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
          <span>{currentSlide + 1}</span>
          <span className="opacity-60"> / {slides.length}</span>
        </div>
      </div>
    </div>
  );
}