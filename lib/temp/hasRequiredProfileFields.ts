export function hasRequiredProfileFields(frontmatter: any) {
    const requiredFields = [
        'curation_status',
        // 'social_change',
    ];

    // Check if all required fields are present
    for (const field of requiredFields) {
        if (frontmatter.hasOwnProperty(field)) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}
