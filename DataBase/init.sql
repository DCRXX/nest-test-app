CREATE TYPE IF NOT EXISTS level AS ENUM ('BASIC', 'MEDIUM', 'ADVANCED');

CREATE TABLE IF NOT EXISTS profile (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name STRING NOT NULL,
    description STRING NOT NULL,
    links STRING[] NOT NULL
);

CREATE TABLE IF NOT EXISTS skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "profileId" UUID,
    name STRING NOT NULL,
    "skillsLevel" level NOT NULL,
    CONSTRAINT fk_skills_profile FOREIGN KEY ("profileId") REFERENCES profile(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS experience (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company STRING NOT NULL,
    position STRING NOT NULL,
    "periodOfEmployment" STRING NOT NULL,
    "profileId" UUID NOT NULL,
    achievements STRING NOT NULL,
    CONSTRAINT fk_experience_profile FOREIGN KEY ("profileId") REFERENCES profile(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS project (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name STRING NOT NULL,
    link STRING[] NOT NULL,
    "profileId" UUID NOT NULL,
    CONSTRAINT fk_project_profile FOREIGN KEY ("profileId") REFERENCES profile(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_skills_profileId ON skills("profileId");
CREATE INDEX IF NOT EXISTS idx_experience_profileId ON experience("profileId");
CREATE INDEX IF NOT EXISTS idx_project_profileId ON project("profileId");