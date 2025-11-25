"use client";

import { Sparkles, Shield, Search, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function MainHero() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[85vh] text-white overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-700 opacity-90" />

      {/* Floating Orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6 mt-12">
        <div className="flex justify-center mb-4">
          <Shield className="w-20 h-20 text-yellow-300 animate-pulse drop-shadow-lg" />
        </div>

        <h1 className="text-6xl font-bold tracking-tight mb-4 drop-shadow-lg">
          NEEDSFINE
        </h1>

        <p className="text-2xl opacity-90 mb-6 leading-relaxed">
          리뷰의 진짜 가치를 계산하는<br />
          <span className="text-yellow-300 font-semibold">AI 신뢰도 분석 시스템</span>
        </p>

        <div className="flex justify-center gap-3 mb-10">
          <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm text-lg flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            가짜 리뷰 차단
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm text-lg flex items-center gap-2">
            <Search className="w-5 h-5" />
            정교한 분석
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm text-lg flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            신뢰도 기반 평점
          </span>
        </div>

        <div className="flex justify-center gap-6 mt-4">
          <Button className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-6 text-xl rounded-2xl shadow-lg">
            시작하기
          </Button>

          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-xl rounded-2xl shadow-lg"
          >
            기능 보기
          </Button>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
}
