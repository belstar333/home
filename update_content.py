
import json
import os

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(path, data):
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def get_section_by_type(sections, type_name):
    return next((s for s in sections if s['type'] == type_name), None)

def ensure_section(page, section_type, block_type, data_generator, insert_index=-1):
    existing = get_section_by_type(page['sections'], section_type)
    if not existing:
        new_section = {
            "id": f"s_{section_type}_{len(page['sections'])}",
            "type": section_type,
            "blocks": [
                {
                    "type": block_type,
                    "data": data_generator(page)
                }
            ]
        }
        if insert_index == -1:
            # Insert before contact if it exists, otherwise at end
            contact_idx = -1
            for i, s in enumerate(page['sections']):
                if s['type'] == 'contact':
                    contact_idx = i
                    break
            
            if contact_idx != -1:
                page['sections'].insert(contact_idx, new_section)
            else:
                page['sections'].append(new_section)
        else:
             page['sections'].insert(insert_index, new_section)
        print(f"Added {section_type} to {page['slug']}")

def generate_benefits(page):
    # premium generic benefits if specific ones aren't defined
    return {
        "title": "핵심 가치",
        "items": [
            "엔터프라이즈급 안정성 및 고가용성 보장",
            "표준화된 아키텍처 기반의 운영 효율성 극대화",
            "유연한 확장성을 고려한 미래 지향적 설계",
            "데이터 기반의 실시간 관제 및 선제적 장애 대응"
        ]
    }

def generate_faq(page):
    return {
        "title": "FAQ",
        "items": [
            {
                "q": "기존 인프라 환경 진단은 어떻게 진행되나요?",
                "a": "전문 엔지니어가 현황 분석 체크리스트를 기반으로 인프라, 보안, 운영 프로세스를 종합적으로 진단하여 최적의 개선안을 도출합니다."
            },
            {
                "q": "프로젝트 수행 기간은 얼마나 소요되나요?",
                "a": "프로젝트 범위와 규모에 따라 다르지만, 일반적으로 분석/설계 2주, 구축/이행 4주~8주, 안정화 2주를 포함한 표준 일정을 제안드립니다."
            },
            {
                "q": "유지보수 및 기술지원 체계는 어떻게 구성되나요?",
                "a": "24x7 모니터링 및 장애 대응 체계를 운영하며, 고객의 요구 수준(SLA)에 맞춘 차별화된 기술 지원 서비스를 제공합니다."
            }
        ]
    }

def enhance_hero(page):
    # Enhance hero subtexts for a more premium feel
    hero_updates = {
        "/service/server": "비즈니스 연속성을 위한 고성능·고가용성 서버 인프라를 구축하고, 운영 자동화를 통해 IT 민첩성을 극대화합니다.",
        "/service/network": "초고속, 초저지연, 초연결 네트워크 아키텍처를 설계하여 디지털 트랜스포메이션을 가속화하는 기반을 마련합니다.",
        "/service/storage-backup": "데이터 자산의 완벽한 보호와 비즈니스 연속성을 보장하는 지능형 스토리지 및 재해 복구 솔루션을 제공합니다.",
        "/service/consulting": "IT 인프라의 현재와 미래를 잇는 전략적 로드맵을 수립하고, 비즈니스 목표 달성을 위한 최적의 기술 경로를 제시합니다.",
        "/service/maintenance": "예측 가능한 유지보수와 선제적 장애 예방 활동을 통해 시스템 가동률을 극대화하고 운영 리스크를 최소화합니다."
    }
    
    hero_section = get_section_by_type(page['sections'], 'hero')
    if hero_section and page['slug'] in hero_updates:
        hero_section['blocks'][0]['data']['sub'] = hero_updates[page['slug']]
        print(f"Enhanced hero for {page['slug']}")

def main():
    file_path = 'content/pages.json'
    data = load_json(file_path)
    
    # Process all service pages
    for slug, page in data.items():
        if slug.startswith("/service"):
            print(f"Processing {slug}...")
            
            # 1. Enhance Hero
            enhance_hero(page)
            
            # 2. Ensure Benefits
            ensure_section(page, "benefits", "benefits", generate_benefits)
            
            # 3. Ensure FAQ
            # Using generic FAQ generator if section missing.
            # ideally we would have specific FAQs but generic ones are better than nothing for "premium" feel structure
            ensure_section(page, "faq", "faq", generate_faq)
            
            # 4. Enhance RichText (Example: prepend a premium lead-in if not present)
            # This is risky to do programmatically without context, so skipping auto-rewrite of body.
            # But we can ensure the title is "Service Overview" or similar consistent premium naming if strictly "개요"
            content_section = get_section_by_type(page['sections'], 'content')
            if content_section:
                 block = content_section['blocks'][0]
                 if block['type'] == 'richText' and block['data']['title'] == "개요":
                     block['data']['title'] = "서비스 개요"

    save_json(file_path, data)
    print("Content update complete.")

if __name__ == "__main__":
    main()
