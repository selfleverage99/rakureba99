"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { videoContent } from "@/data/content"
import { Play, Pause, Clock, Volume2, VolumeX, Maximize } from "lucide-react"

export function Video() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  return (
    <section className="section-padding bg-primary-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-800 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-4 border border-white/20">
            動画でわかる
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {videoContent.sectionTitle}
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            {videoContent.sectionDescription}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 aspect-video group"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              {/* Video Element */}
              <video
                ref={videoRef}
                src={videoContent.videoUrl}
                className="w-full h-full object-cover"
                playsInline
                onEnded={() => setIsPlaying(false)}
                poster={videoContent.videoPlaceholder}
              />

              {/* Overlay when not playing */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/40 to-transparent" />
              )}

              {/* Play/Pause Button */}
              {(!isPlaying || showControls) && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-2xl transition-all ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 md:w-10 md:h-10 text-primary" fill="currentColor" />
                    ) : (
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-primary ml-1" fill="currentColor" />
                    )}
                  </motion.div>
                </button>
              )}

              {/* Controls Bar */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleMute}
                      className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <button
                    onClick={handleFullscreen}
                    className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Duration Badge */}
              {!isPlaying && (
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/50 rounded-full text-white text-sm backdrop-blur-sm">
                  <Clock className="w-4 h-4" />
                  <span>3:00</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
